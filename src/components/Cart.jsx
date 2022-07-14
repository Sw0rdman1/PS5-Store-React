import React from "react";
import CheckOutForm from "./CheckOutForm";
import OneProduct from "./OneProduct";

const Cart = ({ products, resetForm }) => {
  return (
    <div className="cart-container">
      <div className="checkout-form">
        <div className="text-checkout">This is your cart:</div>
        {products.map((prod) => {
          return (
            <div className="products-in-cart">
              <OneProduct product={prod} key={prod.id} inCart={1} />;
            </div>
          );
        })}
      </div>
      <div className="checkout-form1">
        <CheckOutForm resetForm={resetForm} />
      </div>
    </div>
  );
};

export default Cart;
