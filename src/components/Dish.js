import { CDN_LINK } from './../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../utils/cartSlice'; 

const Dish = (props) => {
    const {id, name, imageId, price, category} = props.dish;  

    const dispatch = useDispatch();
    const handlerAddItemToCart = (dish) => {
        dispatch(addItem(dish));
    }

    const handleRemoveItemCart = (dish) => {
        dispatch(removeItem(dish));
    }

    const items = useSelector((store)=>store.cart.items);

    const dishCounter = (items) => {
        for(let item of items){
            if(item.id == id){
                return (item.count);
            }
        }
        return 0;
    }

    return (
        <div className="h-auto p-3 m-3  rounded-md w-72 shadow-xl">
            <div className="dish-logo">
                <img className="w-64" src={CDN_LINK + imageId}/>
            </div>
            <div className="font-mono">
                <h3 className="font-bold">{name}</h3>
                <div>₹{price/100}</div>
                <div className="font-semibold">{category}</div>
               { /**  <div>{description}</div> */}
            </div>

            <div className="">
               
                 <button onClick={()=>handlerAddItemToCart(props.dish)}  className="text-2xl m-2 px-2 border bg-gray-300 hover:bg-gray-200"> + </button>
                 {
                    dishCounter(items)
                 }
                 <button onClick={()=>handleRemoveItemCart(props.dish)}  className="text-2xl m-2 px-2 border bg-gray-300 hover:bg-gray-200"> - </button>
                
            </div>
        </div>
    );
}

export default Dish;