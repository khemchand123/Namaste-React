import { useParams } from 'react-router-dom';
import {useState, useEffect } from 'react';
import Shimmer from './Shimmer';

import Dish from './Dish';
import RestaurantBanner from "./RestaurantBanner";
import { useDispatch } from "react-redux"
import { addItem } from '../utils/cartSlice';


const RestaurantMenu = () => {
    const { id } = useParams();
    const resId = id.split("-").slice(-1);
    const [restaurant, setRestaurant] = useState([]);
    const [restaurantInfo, setRestaurantInfo] = useState(null);

    const dispatch = useDispatch();
    

    useEffect(()=>{
        getRestaurantMenu();
    }, []);

 

    async function getRestaurantMenu(){
       const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=29.3862327&lng=76.9572233&restaurantId=${resId}&submitAction=ENTER`)
       const json = await data.json();
       console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
       setRestaurant(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
       setRestaurantInfo(json.data.cards[0].card.card.info);  
       console.log(restaurantInfo);          
    }

    // early return
    if(restaurant.length == 0 || restaurantInfo == null){
        return <Shimmer/>
    }

    return (
        <div>
            {
                <RestaurantBanner restaurantInfo = {restaurantInfo}/>
            }
           
            <div className="flex flex-wrap">
            {restaurant.map((recipe)=>
               (<Dish key={recipe.card.info.id}  dish={recipe.card.info}/>)
            )}
            </div>
           
        </div>
    );
}

export default RestaurantMenu;