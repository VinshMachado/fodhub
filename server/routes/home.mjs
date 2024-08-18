import { Router, request, response } from "express";
const router=Router();
import verifyToken from "../middleware.mjs";
import { RefreashToken,User } from "../mongoose/userDetails";
import { header } from "express-validator";
import fetch from "node-fetch";
import fs from 'fs'

router.get('/home',verifyToken,(request,response)=>{
    response.send("hello")
})
//console.groupCollapsed(fetch('https://api.foursquare.com/v3/places/search'))
/*curl --request GET \
     --url https://api.foursquare.com/v3/places/search\ 
     --header 'Authorization: fsq3WZ5IS57gc25Wo2GaMWXKgI8Ohb9Z37Bm5i4m36C62/k=' \
     --header 'accept: application/json'*/

router.get('/navigate',(request,response)=>{
    header:'Authorization:fsq3bmQchhMnA3PyAxJ/xJuixe4wlnBB8OoZxSDoHKd8uqs='
    fetch('https://api.foursquare.com/v3/places/search').then(res=>res.json()).then(data=>response.json(data))
})

/*async function fetchFoursquareData(latitude, longitude, radius) {
    const clientId = 'F01D2HFGKUJJT0IUF3JLTRDYNWBH4HWBOQVLOU4LRP0GJPUC';
    const clientSecret = 'VKFMLV4VL43YJQGLCGNN25E5C1SVDIDA2ITSK04QJ50BZXKY';
    const version = '20230801'; // Replace with desired version

    const url = https://api.foursquare.com/v3/places/search?ll=${latitude},${longitude}&radius=${radius}&limit=10; // Adjust limit as needed

    const options = {
        method: 'GET',
        headers: {
            'Authorization': fsq3+${clientId}/${clientSecret}
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}*/
export default router;