import { Router, request, response } from "express";
const router=Router();
import verifyToken from "../middleware.mjs";
import { findRestaurantsByPlaceIds } from "../middleware.mjs";
import { northindia_budget, northindia_popular } from "../restaurantData.mjs/homeResturantDetails.mjs";
import { fetchRestaurantsByNameOrSimilar } from "../middleware.mjs";
import { fetchAndSaveRestaurants } from "../middleware.mjs";
import { Restaurant } from "../mongoose/userDetails";
const apiKey='AIzaSyBZ2YIJkSYkMQ6e7JKlHWVbqmsfdE_X5wI'
router.get('/home',verifyToken,(request,response)=>{
    response.send("hello")
})

router.get('/navigate',(request,response)=>{
  
    fetchAndSaveRestaurants(apiKey,request.query.latitude,request.query.longitude,request.query.radius).then(data=>response.json(data))
});
  
router.get('/northindia',async(request,response)=>{
    const {filter}=request.query
    
    if(filter=='rating'){
        findRestaurantsByPlaceIds(northindia_popular).then(data=>{response.json(data)})
    }
    else{
        findRestaurantsByPlaceIds(northindia_budget).then(data=>{response.json(data)})
    }

})

router.get('/search',(request,response)=>{
    const {search,latitude,longitude}=request.query;
    console.log(search)
    fetchRestaurantsByNameOrSimilar(apiKey,search,latitude,longitude).then(data=>response.json(data))
})

 

export default router;