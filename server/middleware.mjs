import jwt from 'jsonwebtoken';
import { RefreashToken } from './mongoose/userDetails';
import express from 'express'
import cookieParser from 'cookie-parser';
import axios from 'axios';
import mongoose from 'mongoose';
import { Restaurant } from './mongoose/userDetails';
import { link } from 'fs';
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
        //console.log(userId)
        const foundToken = await RefreashToken.findOne({ user: userId });
        //console.log(foundToken)
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



// Function to get nearby restaurants
export async function getNearbyRestaurants(lat, lng, rad, apiKey) {
    const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
    const params = {
        location: `${lat},${lng}`,
        radius: rad, // Adjust the radius as needed (in meters)
        type: 'restaurant',
        key: apiKey,
    };

    try {
        const response = await axios.get(url, { params });
        const places = response.data.results;

        // Iterate through each place to get detailed information
        const detailsPromises = places.map(place => getPlaceDetails(place.place_id, apiKey));
        const details = await Promise.all(detailsPromises);

        return details;
    } catch (error) {
        console.error('Error fetching nearby restaurants:', error);
        throw error;
    }
}

// Helper function to get detailed information for each place
async function getPlaceDetails(placeId, apiKey) {
    const url = 'https://maps.googleapis.com/maps/api/place/details/json';
    const params = {
        place_id: placeId,
        fields: 'name,formatted_address,geometry,place_id,formatted_phone_number,website,opening_hours,price_level,rating,user_ratings_total,reviews,types',
        key: apiKey,
    };

    try {
        const response = await axios.get(url, { params });
        return response.data.result;
    } catch (error) {
        console.error('Error fetching place details:', error);
        throw error;
    }
}

 


// Fetch
export async function fetchPlaceDetails(apiKey, placeId) {
  try {
      const response = await axios.get('https://maps.googleapis.com/maps/api/place/details/json', {
          params: {
              place_id: placeId,
              key: apiKey,
          }
      });
      return response.data.result;
  } catch (error) {
      console.error(`Error fetching details for place ID ${placeId}:`, error);
      return null;
  }
}



// Helper function to get detailed information for each place
export async function fetchRestaurantsByNameOrSimilar(api_key,name, latitude, longitude, radius = 10000) {
    try {
      const endpoint = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
      const params = {
        keyword: name,
        location: `${latitude},${longitude}`,
        radius: radius,
        type: 'restaurant',
        key: api_key,
      };
  
      const response = await axios.get(endpoint, { params });
  
      const places = response.data.results;
      const savedRestaurants = [];
      const placeIds = [];

      if (places.length === 0) {
          console.log('No restaurants found.');
          return [];
      } else {
          console.log(`Found ${places.length} restaurants.`);

          
          for (const place of places) {
              placeIds.push(place.place_id); 

          
              const details = await fetchPlaceDetails(api_key, place.place_id);

              if (details) {
                  const existingRestaurant = await Restaurant.findOne({ place_id: place.place_id });

                  if (!existingRestaurant) {
                      const newRestaurant = new Restaurant({
                          name: details.name,
                          address: details.formatted_address,
                          place_id:place.place_id,
                          phone_number: details.formatted_phone_number || '',
                          geometry: {
                              location: {
                                  lat: details.geometry.location.lat,
                                  lng: details.geometry.location.lng
                              },
                              viewport: details.geometry.viewport
                          },
                          opening_hours: details.opening_hours,
                          rating: details.rating,
                          reviews: details.reviews || [], 
                          user_ratings_total: details.user_ratings_total,
                          types: details.types,
                          photos: details.photos || []
                      });

                      await newRestaurant.save();
                      savedRestaurants.push(newRestaurant);
                  } else {
                      savedRestaurants.push(existingRestaurant);
                  }
              }
          }

          console.log('Restaurants have been processed and saved.');
          
          
          return savedRestaurants.sort()
      }
  } catch (error) {
      console.error('Error fetching or saving restaurant data:', error);
      return [];
  }
  }
  
 


// Fetch

// Fetch and save restaurants 
export async function fetchAndSaveRestaurants(apiKey, latitude, longitude, radius) {
  try {
      // Fetch nearby places
      const response = await axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
          params: {
              location: `${latitude},${longitude}`,
              radius: radius,
              type: 'restaurant',
              key: apiKey
          }
      });

      const places = response.data.results;
      const savedRestaurants = [];
      const placeIds = [];

      if (places.length === 0) {
          console.log('No restaurants found.');
          return [];
      } else {
          console.log(`Found ${places.length} restaurants.`);

          
          for (const place of places) {
              placeIds.push(place.place_id); 

          
              const details = await fetchPlaceDetails(apiKey, place.place_id);

              if (details) {
                  const existingRestaurant = await Restaurant.findOne({ place_id: place.place_id });

                  if (!existingRestaurant) {
                      const newRestaurant = new Restaurant({
                          name: details.name,
                          address: details.formatted_address,
                          place_id:place.place_id,
                          phone_number: details.formatted_phone_number || '',
                          geometry: {
                              location: {
                                  lat: details.geometry.location.lat,
                                  lng: details.geometry.location.lng
                              },
                              viewport: details.geometry.viewport
                          },
                          opening_hours: details.opening_hours,
                          rating: details.rating,
                          reviews: details.reviews || [], 
                          user_ratings_total: details.user_ratings_total,
                          types: details.types,
                          photos: details.photos || []
                      });

                      await newRestaurant.save();
                      savedRestaurants.push(newRestaurant);
                  } else {
                      savedRestaurants.push(existingRestaurant);
                  }
              }
          }

          console.log('Restaurants have been processed and saved.');
          
          
          return savedRestaurants
      }
  } catch (error) {
      console.error('Error fetching or saving restaurant data:', error);
      return [];
  }
}







  export default verifyToken