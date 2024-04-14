  import React from "react";
  import ReactDOM  from "react-dom/client";

  const Header=()=>{
    return(
      <div className="header">
        <div className="logo-container">
          <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP-Stp3j9l7A7FmeODEQvEwQcBTz_-55i1uZrCXG6lyA&s"></img>
        </div>
        <div className="nav-items">
          <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Cart</li>
          </ul>

        </div>
      </div>
    )
  }
  const Body=()=>{
    return(
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
        {/* Restaurant card component- break into new component for reusability */}
        {/* passing props to a component: */}
        <RestaurantCard resData={resObj}/>
        
        </div>
      </div>
    )
  }

  const resObj=
    {
      "info": {
          "id": "691805",
          "name": "UBQ by Barbeque Nation",
          "cloudinaryImageId": "0d36ee943be5611d610ec9864b1bcf51",
          "locality": "Kamla Palace",
          "areaName": "GMS Road",
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
          "parentId": "10804",
          "avgRatingString": "4.1",
          "totalRatingsString": "100+",
          "sla": {
              "deliveryTime": 30,
              "lastMileTravel": 4,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "4.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-04-14 23:30:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "Rxawards/_CATEGORY-Thali.png",
                      "description": "Delivery!"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Thali.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹90"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-kamla-palace-gms-road-dehradun-691805",
          "type": "WEBLINK"
      }
  
  }

  const RestaurantCard=(props)=>{
    // console.log(props)
    const { resData} = props
    return(
      <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
        <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId} alt="res-logo"></img>
       <h3>{resData.info.name}</h3>
       <h4>{resData.info.cuisines.join(",")}</h4>
       <h6>{resData.info.avgRating} stars</h6>
       <h6>{resData.info.costForTwo}</h6>
       <h6>{resData.info.sla.deliveryTime}mins</h6>
      </div>
    )
      
    
  }

  const AppLayout=()=>{
    return(
      <div className="app">
        {/* header
        body
        footer */}
        <Header/>
        <Body/>
      </div>
    )
  }

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);