import { CDN_LINK } from "../utils/constant";

const RestaurantCard = (props) => {
    const { name, cuisines, deliveryTime, costForTwo, avgRating, cloudinaryImageId } = props.restData?.data;
    return (
      <div className="res-card">
        <div className="res-logo">
          <img src={CDN_LINK +cloudinaryImageId} />
        </div>
        <h3>{name}</h3>
        <div>{avgRating}</div>
        <div>{cuisines.join(", ")}</div>
        <div>₹{costForTwo/100} FOR TWO</div>
        <div>{deliveryTime}</div>
      </div>
    );
  };

  export default RestaurantCard;