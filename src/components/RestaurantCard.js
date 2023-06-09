import { CDN_LINK } from "../utils/constant";

const RestaurantCard = (props) => {
    const { name, cuisines, deliveryTime, costForTwo, avgRating, cloudinaryImageId } = props.restData?.data;
    return (
      <div className="m-4 p-3 h-96 w-[280] hover:bg-gray-100 hover:border hover:border-gray-200">
        <div className="res-logo">
          <img className="w-64" src={CDN_LINK +cloudinaryImageId} />
        </div>
        <h3 className="font-bold font-sans text-lg">{name}</h3>
        <div className="font-mono text-sm">{avgRating}</div>
        <div className="font-mono text-sm">{cuisines.join(", ")}</div>
        <div className="font-mono text-sm">₹{costForTwo/100} FOR TWO</div>
        <div className="font-mono text-sm">Delivery Time: {deliveryTime}</div>
      </div>
    );
  };

  export default RestaurantCard;