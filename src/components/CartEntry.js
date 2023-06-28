import { CDN_LINK } from './../utils/constant';

const CartEntry = (props) => {
    const {name, imageId, price, category, count} = props.dish;  
    return (
        <div className="h-auto p-3 m-3  rounded-md w-72 shadow-xl mx-auto flex flex-col">
        <div className="dish-logo">
            <img className="w-64" src={CDN_LINK + imageId}/>
        </div>
        <div className="font-mono">
            <h3 className="font-bold">{name}</h3>
            <div>₹{price/100}</div>
            <div className="font-semibold">{category}</div>
            <div className="">
               
               <button onClick={()=>handlerAddItemToCart(props.dish)}  className="text-2xl m-2 px-2 border bg-gray-300 hover:bg-gray-200"> + </button>
               { count }
               <button onClick={()=>handlerAddItemToCart(props.dish)}  className="text-2xl m-2 px-2 border bg-gray-300 hover:bg-gray-200"> - </button>
              
          </div>
        </div>
        <div>
        </div>
    </div>
    );
}

export default CartEntry;