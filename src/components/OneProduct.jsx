import React from "react";

function OneProduct({ product, onAdd, inCart }) {
  return (
    <div className={inCart === 0 ? "card" : "card-cart"} style={{ margin: 20 }}>
      <img
        className={inCart === 0 ? "card-img-top" : "card-img-left"}
        src={product.imageLink}
        alt="Neka slika"
      />
      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
      </div>
      {inCart === 0 ? (
        <div>
          <p className="card-text">{product.description}</p>

          <button onClick={() => onAdd(product.title, product.id)}>
            Add to Cart
          </button>
        </div>
      ) : (
        <h4 className="amount-text">{"x " + product.amount}</h4>
      )}
    </div>
  );
}

export default OneProduct;
