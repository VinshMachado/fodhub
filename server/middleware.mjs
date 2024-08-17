import jwt from 'jsonwebtoken';
import { RefreashToken } from './mongoose/userDetails';
import express from 'express'
import cookieParser from 'cookie-parser';
express().use(cookieParser())

const verifyToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token)   
 return res.status(401).json({ message:   
 'Unauthorized: No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded;
    next();   

  } catch (err) {

    if (err.name === 'TokenExpiredError') {
      try {
        
        // Extract user ID from decoded token (assuming 'sub' claim holds user ID)
        const userId = extractUserIdFromToken(token);
        console.log(userId)
        const foundToken = await RefreashToken.findOne({ user: userId });
        console.log(foundToken)
        if (!foundToken || foundToken.expiresAt < Date.now()) {
          return res.status(401).json({ message: 'Unauthorized: Refreash token expired or doesnt exist',
            machadoMessage:"this means no refresh token so send them to login screen" });
        }

        // Generate new access and refresh tokens
        const newAccessToken = generateAccessToken(foundToken._id); 
        res.cookie('authToken',newAccessToken,{
            httpOnly:true,sameSite:'strict'
          })
          next()
      } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' ,message:err});
      }
    } else {
      return res.status(403).json({ message: 'Forbidden' });
    }
  }
};
  
function extractUserIdFromToken(token) {
    try {
      const decoded = jwt.decode(token, { complete: true });
      const payload = decoded.payload._id;
      return payload;
    } catch (error) {
      console.error('Error extracting user ID from token:', error);
      return null;
    }
  }
function generateAccessToken(userId){
    const token=jwt.sign({user:userId},process.env.ACCESS_TOKEN_SECRET,{expiresIn:"2h"})
    return token;
}


  export default verifyToken