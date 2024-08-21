import { Router, request, response } from "express";
const router=Router();
import verifyToken from "../middleware.mjs";
import { RefreashToken,User } from "../mongoose/userDetails";
import { header } from "express-validator";
import fetch from "node-fetch";
import fs from 'fs'
import axios from 'axios'
import { error } from "console";
import { fetchRestaurantsByNameOrSimilar } from "../middleware.mjs";
import { fetchAndSaveRestaurants } from "../middleware.mjs";
const apiKey='AIzaSyBZ2YIJkSYkMQ6e7JKlHWVbqmsfdE_X5wI'
router.get('/home',verifyToken,(request,response)=>{
    response.send("hello")
})

router.get('/navigate',(request,response)=>{
  
    fetchAndSaveRestaurants(apiKey,request.query.latitude,request.query.longitude,request.query.radius).then(data=>response.json(data))
});
  
router.get('/NorthIndian',(request,response)=>{
    const {filter}=request.query
    if(filter='rating'){
        response.json()
    }

})

router.get('/search',(request,response)=>{
    const {search,latitude,longitude}=request.query;
    console.log(search)
    fetchRestaurantsByNameOrSimilar(apiKey,search,latitude,longitude).then(data=>response.json(data))
})

 

export default router;