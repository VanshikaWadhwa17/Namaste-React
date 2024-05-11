import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";


const Body=()=>{

     const [listOfRestaurants,setListofRestaurants]=useState(resList)
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