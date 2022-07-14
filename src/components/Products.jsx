import React from "react";
import OneProduct from "./OneProduct";

function Products({ products, onAdd }) {
  return (
    <div className="all-products">
      {products.map((prod) => {
        return (
          <OneProduct product={prod} key={prod.id} onAdd={onAdd} inCart={0} />
        );
      })}
    </div>
  );
}

export default Products;
