import {CDN_URL} from "../utils/constants"

const RestaurantCard=(props)=>{
    // console.log(props)
    const { resData} = props
    const {cloudinaryImageId, name, avgRating, cuisines, costForTwo}=resData.info
    const {deliveryTime} =resData.info.sla
    return(
      <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
        <img className="res-logo" src={CDN_URL+cloudinaryImageId} alt="res-logo"></img>
       <h3>{name}</h3>
       <h4>{cuisines.join(",")}</h4>
       <h6>{avgRating} stars</h6>
       <h6>{costForTwo}</h6>
       <h6>{deliveryTime}mins</h6>
      </div>
    )
      
    
  }
export default RestaurantCard;