import express, { Router, query, request, response } from "express";
const router = Router();
import multer from "multer";
import bodyParser from "body-parser";
import { check, body, validationResult } from "express-validator";
import { User } from "../mongoose/userDetails";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";
import cors from "cors";

router.use(cors());
router.use(cookieParser());

const storage = multer.diskStorage({
  destination: (request, file, cb) => {
    cb(null, "/vapour/public/images");
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
    if (result.errors.length != 0) {
      response.json({ errors: result.errors.map((err) => err.msg) });
    } else {
      try {
        await added.save();
        response.cookie("logged", "true", { maxAge: 6000 });
        console.log(request.cookies);
        response.json({ result: "true" });
      } catch (error) {
        response.send(error);
      }
    }
  }
);

router.get("/login", async (request, response) => {
  const details = {
    usernameOrEmail: request.query.usernameOrEmail,
    password: request.query.password,
  };
  const result = await checklogin(details);
  if (result.success == true) {
    response.cookie("logged", "true", { maxAge: 6000 });
    console.log(result);
    response.json(result);
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
      return { success: false, message: "User not found" };
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

export default router;
