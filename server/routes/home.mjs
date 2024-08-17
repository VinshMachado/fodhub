import { Router, request, response } from "express";
const router=Router();
import verifyToken from "../middleware.mjs";
import { RefreashToken,User } from "../mongoose/userDetails";

router.get('/home',verifyToken,(request,response)=>{
    response.send("hello")
})


export default router;