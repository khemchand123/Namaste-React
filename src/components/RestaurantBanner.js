const RestaurantBanner = (props) => {
    const {name, city, areaName, feeDetails} = props.restaurantInfo;
    return (
         <div className="restaurant-banner">
            <h1>{name}</h1>
            <h3>{city}, {areaName}</h3>
            <h5>{feeDetails.message}</h5>
         </div>
    );
}

export default RestaurantBanner;