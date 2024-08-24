import { Router, request, response } from "express";
const router=Router();
import verifyToken from "../middleware.mjs";
import { findRestaurantsByPlaceIds } from "../middleware.mjs";
import { northindia_budget, northindia_popular } from "../restaurantData.mjs/homeResturantDetails.mjs";
import { fetchRestaurantsByNameOrSimilar } from "../middleware.mjs";
import { fetchAndSaveRestaurants } from "../middleware.mjs";
import { Restaurant } from "../mongoose/userDetails";
import Fuse from "fuse.js";
//const apiKey='AIzaSyBZ2YIJkSYkMQ6e7JKlHWVbqmsfdE_X5wI'
router.get('/home',verifyToken,(request,response)=>{
    response.send("hello")
})

router.post('/navigate',(request,response)=>{
    
  findRestaurantsByNames(request.body).then(data=>response.json(data))
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
    const {search}=request.query;
    console.log(search)
    searchRestaurantByName(search).then(data=>response.json(data))
})

 
async function findRestaurantsByNames(names) {
  try {
    // Ensure names are trimmed and remove duplicates
    const uniqueNames = [...new Set(names.map(name => name.trim()))];

    // Log extracted names for debugging
    console.log('Extracted names:', uniqueNames);

    // If no names are provided, return an empty array
    if (uniqueNames.length === 0) {
      return [];
    }

    // Retrieve all restaurant names from the database
    const allRestaurants = await Restaurant.find({}).select('name').exec();
    const restaurantNames = allRestaurants.map(rest => rest.name);

    // Set up Fuse.js options for fuzzy search
    const fuse = new Fuse(restaurantNames, {
      includeScore: true,
      threshold: 0.2 // Adjust threshold as needed (0.0 is exact match, 1.0 is very loose)
    });

    // Perform fuzzy search for each unique name
    const results = uniqueNames.map(name => {
      const searchResults = fuse.search(name);
      return searchResults.map(item => item.item);
    }).flat();

    // Log found restaurants for debugging
    console.log('Restaurants found:', results);

    // Retrieve full restaurant documents
    const matchedRestaurants = await Restaurant.find({ name: { $in: results } }).exec();

    return matchedRestaurants;
  } catch (error) {
    console.error('Error finding restaurants:', error);
    throw error;
  }
}
  
  async function searchRestaurantByName(search) {
    try {
      // Log the search term for debugging
      console.log('Search term:', search);
  
      // Retrieve all restaurant names from the database
      const allRestaurants = await Restaurant.find({}).select('name').exec();
      const restaurantNames = allRestaurants.map(rest => rest.name);
  
      // Set up Fuse.js for fuzzy matching
      const fuse = new Fuse(restaurantNames, {
        includeScore: true,
        threshold: 0.4 // Adjust threshold as needed (0.0 is exact match, 1.0 is very loose)
      });
  
      // Perform fuzzy search
      const searchResults = fuse.search(search);
  
      // Filter out results with high scores (less relevant)
      const filteredResults = searchResults
        .filter(item => item.score < 0.4) // Adjust score threshold as needed
        .map(item => item.item);
  
      // Retrieve full restaurant documents based on filtered results
      const matchedRestaurants = await Restaurant.find({ name: { $in: filteredResults } }).exec();
  
      return matchedRestaurants;
    } catch (error) {
      console.error('Error searching for restaurant:', error);
      throw error;
    }
  }
  

  

export default router;