const RestaurantBanner = (props) => {
    const {name, city, areaName, feeDetails} = props.restaurantInfo;
    return (
         <div className="p-3 m-3 bg-slate-200">
            <h1 className="text-3xl font-bold">{name}</h1>
            <h3 className="font-medium">{city}, {areaName}</h3>
            <h5 className="font-thin">{feeDetails.message}</h5>
         </div>
    );
}

export default RestaurantBanner;