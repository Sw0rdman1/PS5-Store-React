import React from "react";
import { BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { GiMoneyStack } from "react-icons/gi";

import logo from "./pictures/PS5-logo.png";

function NavBar({ cartNum, moneyNum }) {
  return (
    <div className="navBar">
      <Link to="/" className="cart-text">
        My Store
      </Link>
      <Link to="/cart" className="cart-items">
        <BsCartFill className="cart-logo" />
        <p className="cart-num">{cartNum}</p>
        <GiMoneyStack className="cart-logo" />
        <p className="cart-num">{moneyNum.toFixed(2) + "$"}</p>
        <img src={logo} alt="" />
      </Link>
    </div>
  );
}

export default NavBar;
