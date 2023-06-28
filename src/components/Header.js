import { useState } from "react";
import LOGO from "./../assests/img/smoking-burger.jpg";

import { Link } from "react-router-dom";
import { useContext } from "react";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [isLoginIn, setIsLoginIn] = useState(false);
  const { user } = useContext(userContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex flex-1 justify-start h-28 border-solid border border-gray-500 shadow-lg">
      <div>
        <Link to="/">
          <img className="h-24" src={LOGO} />
        </Link>
      </div>
      <div className="flex flex-auto justify-around">
        <ul className="flex flex-wrap h-28 content-center">
          <li className="mx-3 p-1 hover:bg-gray-200 hover:rounded-md">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-3 p-1 hover:bg-gray-200 hover:rounded-md">
            <Link to="/about">About Us</Link>
          </li>
          <li className="mx-3 p-1 hover:bg-gray-200 hover:rounded-md">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="mx-3 p-1 hover:bg-gray-200 hover:rounded-md">
            <Link to="/cart"> Cart {cartItems.length} items</Link>
          </li>
          <li className="mx-3 p-1 hover:bg-gray-200 hover:rounded-md3">
            <Link to="/swiggy-instamart">Swiggy-Instamart</Link>
          </li>
        </ul>
        <div className="flex content-center">
          <span className="m-auto p-2 border border-s-2">
            {user.name} - {user.email}
          </span>
          {isLoginIn ? (
            <button
              className="w-28 border border-s-2 p-3 m-auto bg-green-600 rounded-2xl text-white"
              onClick={() => setIsLoginIn(false)}
            >
              LogOut
            </button>
          ) : (
            <button
              className="w-28 border border-s-2 p-3 m-auto bg-red-600 rounded-2xl text-white"
              onClick={() => setIsLoginIn(true)}
            >
              LogIn
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
