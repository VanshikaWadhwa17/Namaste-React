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
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        </div>
      </div>
    )
  }

  const RestaurantCard=()=>{
    return(
      <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
        <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/w0kidct9etk1ak5y3ogv" alt="res-logo"></img>
       <h3>Nany's Bakery</h3>
       <h4>Bakery, Cakes, Pastries</h4>
       <h6>3.4 Stars</h6>
       <h6>34 mins</h6>
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