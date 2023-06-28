import { useState, useEffect } from 'react';

const useRestaurants = () => {
    const [filterRestaurants, setFilterRestaurants] = useState([]);
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    useEffect(() => {
        getRestaurants();
    }, []);

    async function getRestaurants() {
        //https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.3862327&lng=76.9572233&page_type=DESKTOP_WEB_LISTING
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5904779&lng=73.7271909&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilterRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        console.log(json?.data?.cards[2]?.data?.data?.cards[0].data);
    };
    return [filterRestaurants, listOfRestaurants, setFilterRestaurants, setListOfRestaurants];
}

export default useRestaurants;