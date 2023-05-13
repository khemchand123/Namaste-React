import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

import { Link} from 'react-router-dom'
import useOnline from './../utils/useOnline';

import Shimmer from './Shimmer';
import useRestaurants from "../utils/useRestaurants";

const Body = () => {

  
  const [filterRestaurants, listOfRestaurants, setFilterRestaurants, setListOfRestaurants]  = useRestaurants();
  const [searchText, setSearchText] = useState("");

  const isOnline = useOnline();
  

 if(!isOnline){
  return (<h1>OOOO! please check your network connectivity.</h1>)
 }

  //early return - if its return return so component or jsx
  if(listOfRestaurants == undefined){
    return <h1>API Failing....</h1>
  }

  return listOfRestaurants.length === 0 ? (<Shimmer/>) : (
    <div className="body">
      <div className="search-filters">
          <div className="filters">
          <button
            className="res-filter"
            onClick={() => {
              const filterRatedRestaurants = filterRestaurants.filter(
                (restaurant) => restaurant.data.avgRating > 4
              );
              console.log(filterRatedRestaurants);
              setFilterRestaurants(filterRatedRestaurants);
            }}
          >
            Filter Famous Restaurant
          </button>
          </div>
          <div className="search-bar">
              <input type="text" id="search" placeholder="Enter Restaurant Name" value={searchText} onChange={(event)=>setSearchText(event.target.value)}/>
              <button className="search-btn" onClick={()=>{
                 const text = document.getElementById("search").value;
                 const searchResult = listOfRestaurants.filter((restaurant)=> restaurant.data.name.includes(text))
                 setFilterRestaurants(searchResult);
              }}>Search</button>
          </div>
      </div>
      <div className="res-container">
        { filterRestaurants.length == 0 ?  (<h1>Restaurant Not Find...</h1>) :
            (filterRestaurants.map((restaurant) => {
              let url = `/restaurant/${restaurant.data.slugs.restaurant}-${restaurant.data.id}`
              return ( <Link to={url} key={restaurant.data.id}>
                          <RestaurantCard key={restaurant.data.id} restData={restaurant} />
                        </Link>)
            }))
        } 
      </div>
    </div>
  );
};

export default Body;
