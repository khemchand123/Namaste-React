import { CDN_LINK } from './../utils/constant';

const Dish = (props) => {
    const {name, imageId, price, category, description} = props.dish;  

    return (
        <div className="h-auto p-3 m-3  rounded-md w-72 shadow-xl">
            <div className="dish-logo">
                <img className="w-64" src={CDN_LINK + imageId}/>
            </div>
            <div className="font-mono">
                <h3 className="font-bold">{name}</h3>
                <div>₹{price/100}</div>
                <div className="font-semibold">{category}</div>
                <div>{description}</div>
            </div>
        </div>
    );
}

export default Dish;