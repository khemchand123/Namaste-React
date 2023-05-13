import LOGO from "./../assests/img/smoking-burger.jpg"

import { Link } from "react-router-dom";

const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <Link to="/">
          <img
            className="logo"
            src={LOGO}
          />
          </Link>
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>Cart</li>
            <li><Link to="/swiggy-instamart">Swiggy-Instamart</Link></li>
          </ul>
        </div>
      </div>
    );
  };

export default Header;