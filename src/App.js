import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import nba2k22 from "./components/pictures/NBA_2K22.jpg";
import fifa2021 from "./components/pictures/FIFA_21.jpg";
import battlefield2042 from "./components/pictures/Battlefield_2042.jpg";
import granturismo7 from "./components/pictures/Gran_turismo_7.jpg";
import gtav from "./components/pictures/GTA_V.jpeg";

function App() {
  // const prom = <h3>Cao svima!</h3>;
  //let cartNum = 0;

  const [cartNum, setCartNum] = useState(0);
  const [moneyNum, setMoneyNum] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "NBA 2K22",
      description: "Price : 44.99$",
      price: 44.99,
      imageLink: nba2k22,
      amount: 0,
    },
    {
      id: 2,
      title: "FIFA 2021",
      description: "Price : 35.00$",
      price: 35.0,
      imageLink: fifa2021,
      amount: 0,
    },
    {
      id: 3,
      title: "GTA V",
      description: "Price: 20.00$",
      price: 20.0,
      imageLink: gtav,
      amount: 0,
    },
    {
      id: 4,
      title: "Gran Turismo 7",
      description: "Price: 29.99$",
      price: 29.99,
      imageLink: granturismo7,
      amount: 0,
    },
    {
      id: 5,
      title: "Battlefield 2042",
      description: "Price: 55.00$",
      price: 55.0,
      imageLink: battlefield2042,
      amount: 0,
    },
  ]);

  function refreshCart() {
    let newProducts = products.filter((prod) => prod.amount > 0);
    setCartProducts(newProducts);
  }

  function addProduct(title, id) {
    setCartNum(cartNum + 1);
    products.forEach((prod) => {
      if (prod.id === id) {
        prod.amount++;
        setMoneyNum(moneyNum + prod.price);
      }
    });

    refreshCart();
  }

  function resetForm() {
    products.forEach((prod) => {
      prod.amount = 0;
      setCartNum(0);
      setCartProducts([]);
      setMoneyNum(0);
    });
    alert("Your order is recieved! :D");
  }

  return (
    <BrowserRouter className="App">
      <NavBar cartNum={cartNum} moneyNum={moneyNum}></NavBar>
      <Routes>
        <Route
          path="/"
          element={<Products products={products} onAdd={addProduct} />}
        />

        <Route
          path="/cart"
          element={<Cart products={cartProducts} resetForm={resetForm} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
