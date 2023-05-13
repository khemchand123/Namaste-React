import { CDN_LINK } from './../utils/constant';

const Dish = (props) => {
    const {name, imageId, price, category, description} = props.dish;  

    return (
        <div className="dish">
            <div className="dish-logo">
                <img src={CDN_LINK + imageId}/>
            </div>
            <div className="dish-description">
                <h3>{name}</h3>
                <div>₹{price/100}</div>
                <div>{category}</div>
                <div>{description}</div>
            </div>
        </div>
    );
}

export default Dish;