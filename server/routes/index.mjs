//import STATEMENTS
import express, { Router, query, request, response } from "express";
const router = Router();
import multer from "multer";
import bodyParser from "body-parser";
import { check, body, validationResult } from "express-validator";
import { User } from "../mongoose/userDetails";
import { RefreashToken } from "../mongoose/userDetails";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";
import cors from "cors";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';

//middleware to use
router.use(cors());
router.use(cookieParser());


//this stuff is for multer
const storage = multer.diskStorage({
  destination: (request, file, cb) => {
    cb(null, "/fodhub/server/public");
  },
  filename: (request, file, cb) => {
    const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const newfilename = "PFP_" + uniqueName + path.extname(file.originalname);
    cb(null, newfilename);
  },
});
const upload = multer({ storage: storage });
router.use(express.json());
router.use(bodyParser.urlencoded({ extended: false }));



//post request for signing up
router.post(
  "/login",
  body("username")
    .isLength({ min: 3, max: 10 })
    .withMessage("Your field must be between 3-10 characters long"),
  check("password")
    .isLength({ min: 8, max: 20 })
    .withMessage("Your field must be between 8-20 charecters long"),
  async (request, response) => {
    const { username, email } = request.body;
    const password = await hashPassword(request.body.password);
    const added = new User({
      username: username,
      password: password,
      email: email,
    });
    const result = validationResult(request);
    const hashed = await bcrypt.hash(password, 10);
    if (result.errors.length !=0) {
      response.json({ errors: result.errors.map((err) => err.msg) });
    } else {
      try {
        await added.save();
        const newUser=await User.findOne(added)
        const currentDate=new Date()
        const expireDate=addDays(currentDate,5).toLocaleDateString()
        const payload={_id:newUser._id}
        const token=jwt.sign(payload,process.env.ACCESS_TOKEN_SECRET,{expiresIn:'2h'})
        const rToken=jwt.sign(payload,process.env.ACCESS_TOKEN_SECRET,{expiresIn:'5d'})
        RefreashToken.create({token:rToken,user:payload._id,expiresAt:expireDate})
        response.cookie('authToken',token,{
          httpOnly:true,sameSite:'strict'
        })
        response.json({ result:true,newUser});
      } catch (error) {
        response.send(error);
      }
    }
  }
);


//get request for logging in
router.get("/login",async (request, response) => {
  const details = {
    usernameOrEmail: request.query.usernameOrEmail,
    password: request.query.password,
  };
  const result = await checklogin(details);
  const timestamp =Date.now();
  if(result.success==true){
    const currentDate=new Date()
    const expireDate=addDays(currentDate,5).toLocaleDateString()
    const ACCESS_TOKEN_SECRET=process.env.ACCESS_TOKEN_SECRET
    const payload={_id:result.user._id}
    const token=jwt.sign(payload,ACCESS_TOKEN_SECRET,{expiresIn:"2h"})
    const rToken=jwt.sign(payload,process.env.ACCESS_TOKEN_SECRET,{expiresIn:'5d'})
    if(await RefreashToken.findOne({user:payload})){
      const userId=await RefreashToken.findOne({user:payload})
      const deletedUser=await RefreashToken.findByIdAndDelete(userId._id)
      console.log(deletedUser)
    }
    RefreashToken.create({token:rToken,user:payload._id,expiresAt:expireDate})
        response.cookie('authToken',token,{
          httpOnly:true,sameSite:'strict'
        })
    return response.json({result})
  }
 else{
  response.json(result)
 }
});


router.post("/login/forgotpassword", (request, response) => {});

async function hashPassword(password) {
  //hash password
  const saltRounds = 10;
  const hash = await bcrypt.hash(password, saltRounds);
  return hash;
}


async function checklogin(credentials) {
  const { usernameOrEmail, password } = credentials;

  try {
    // Find user by username or email
    const user = await User.findOne({
      $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
    });

    if (!user) {
      return { success: false, message: "User not found",
    machado_message:"this error means either username or email is wrong" };
    }

    // Compare passwords
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return { success: false, message: "Incorrect password" };
    }

    return { success: true, user };
  } catch (error) {
    console.error("Error checking user credentials:", error);
    return { success: false, message: "An error occurred" };
  }
}


function addDays(date,days){
  const newDate=new Date(date.getTime()+(days*24*60*60*1000))
  return newDate
}



//exporting the router to server.mjs
export default router;
