import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState } from "react";

const Body=()=>{

     const [listOfRestaurants,setListofRestaurants]=useState([
        {
            "info": {
                "id": "691805",
                "name": "UBQ by Barbeque Nation",
                "cloudinaryImageId": "0d36ee943be5611d610ec9864b1bcf51",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "North Indian",
                    "Barbecue",
                    "Biryani",
                    "Kebabs",
                    "Mughlai",
                    "Desserts"
                ],
                "avgRating": 4.1,
                "deliveryTime": 30,  
            }
        },
        {
            "info": {
                "id": "68781",
                "name": "Bikanervala",
                "cloudinaryImageId": "vmhyp6xup1nifix6v17e",
                "costForTwo": "₹150 for two",
                "cuisines": [
                    "Sweets",
                    "South Indian",
                    "Chinese"
                ],
                "avgRating": 3.5,
                "veg": true,
                "deliveryTime": 18,
        }
    },
        {
            "info": {
                "id": "69769",
                "name": "Aman Vegetarian",
                "cloudinaryImageId": "ygczg6efdbjietl1req7",
                "costForTwo": "₹260 for two",
                "cuisines": [
                    "North Indian",
                    "Thalis",
                    "Chinese"
                ],
                "avgRating": 4.3,
                "deliveryTime": 18, 
            }
        },
        {
            "info": {
                "id": "69447",
                "name": "Gaylord Express",
                "cloudinaryImageId": "uj68ybtfwbydewraxzhm",
                "costForTwo": "₹250 for two",
                "cuisines": [
                    "Bakery",
                    "Chinese",
                    "North Indian",
                    "Beverages"
                ],
                "avgRating": 3.8,
                "deliveryTime": 22,
            }
        },
        {
            "info": {
                "id": "371422",
                "name": "Handi punjab ki",
                "cloudinaryImageId": "vozwrqdkvfcfutehx4ld",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "North Indian",
                    "Snacks",
                    "Chinese"
                ],
                "avgRating": 4.4,
                "veg": true,
                "deliveryTime": 29,
            }
        },
        {
            "info": {
                "id": "74373",
                "name": "Walk In Woods",
                "cloudinaryImageId": "rx6kpst6wxyw9vvj7wo8",
                "costForTwo": "₹450 for two",
                "cuisines": [
                    "North Indian",
                    "Chinese",
                    "Biryani"
                ],
                "avgRating": 4.3,
                "deliveryTime": 25,
            }
        },
        {
            "info": {
                "id": "532213",
                "name": "Chilli'Z Restro",
                "cloudinaryImageId": "mzsuzzznrww2mpzwk27d",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "Indian",
                    "Chinese",
                    "Mughlai"
                ],
                "avgRating": 4.2,
                "deliveryTime": 20,
            }
        },
    ])
    return(
      <div className="body">
        <div className="search">Search</div>
        <div className="topRated">
            <button className="filter-btn" onClick={()=>{
                const filteredList=listOfRestaurants.filter((res)=>res.info.avgRating >4)
                setListofRestaurants(filteredList) // pass in the new data inside setListOfRestaurant to update the old data when the button is clicked.
            }}>
                {/* we are updating listOfRestaurants with filteredList when the button is clicked */}
                Top Rated Restaurants
                </button>
        </div>
        <div className="res-container">
       
       {listOfRestaurants.map((restaurant)=>(
        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
       ))}
        </div>
      </div>
    )
  }
export default Body;