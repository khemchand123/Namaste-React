import CartEntry from "./CartEntry";
import { useSelector } from "react-redux";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);

  return (
    <div>
      <div className="m-2 p-2 bg-slate-200 text-center"> Carts- Disclaimer Personalization Based Cart Checkout</div>
      <div className="m-2 p-2 text-center cursor-pointer">Read the privacy policy documenent carefully</div>
      <div className="text-center m-2 p-2 text-2xl">Return | Refund | Order</div>
      {console.log( items)}
      {items.map((dish) => 
        <CartEntry key={dish.id} dish={dish}></CartEntry>
      )}
    </div>
  );
};

export default Cart;
