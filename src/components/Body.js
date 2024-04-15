import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body=()=>{
    return(
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
        {/* Restaurant card component- break into new component for reusability */}
        {/* passing props to a component: */}
        {/* <RestaurantCard resData={resList[0]}/>
        <RestaurantCard resData={resList[1]}/>
        <RestaurantCard resData={resList[2]}/>
        <RestaurantCard resData={resList[3]}/>
        <RestaurantCard resData={resList[4]}/>
        <RestaurantCard resData={resList[5]}/>
        <RestaurantCard resData={resList[6]}/>
        <RestaurantCard resData={resList[7]}/>
        <RestaurantCard resData={resList[8]}/> */}
       
       {resList.map((restaurant)=>(
        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
       ))}

       {/* index of the loop is also used as key but react official documentation says using index is bad practice */}
       {/* {resList.map((restaurant,index)=>(
        <RestaurantCard key={index} resData={restaurant}/>
       ))} */}
        
        </div>
      </div>
    )
  }
export default Body;