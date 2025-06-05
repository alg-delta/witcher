import "./App.css";
import Cart from "./components/Cart";
import Headr from "./components/Headr";
import Main from "./components/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./data";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Witcher1 from "./components/Witcher1";
import Witcher2 from "./components/Witcher2";
import Witcher3 from "./components/Witcher3";
import Witcher4 from "./components/Witcher4";
import Witcher5 from "./components/Witcher5";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const add = (product) => {
    // Знаходимо чи є товар в корзині по id
    const productInCart = cartItems.find((item) => item.id === product.id);
    if (productInCart) {
      // Якщо товар вже є в корзині, то змінюємо його кількість number+1
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productInCart, number: productInCart.number + 1 }
            : item
        )
      );
    } else {
      // Якщо товару ще немає в корзині, то додаємо його та ставимо кількість number: 1
      setCartItems([...cartItems, { ...product, number: 1 }]);
    }
  };

  const remove = (product) => {
    // Знаходимо чи є товар в корзині по id
    const productInCart = cartItems.find((item) => item.id === product.id);
    if (productInCart.number !== 1) {
      // Якщо товар вже є в корзині, то змінюємо його кількість number+1
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productInCart, number: productInCart.number - 1 }
            : item
        )
      );
    } else {
      // Якщо товару ще немає в корзині, то додаємо його та ставимо кількість number: 1
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
  };
  return (
    <div className="App">
      <BrowserRouter basename="/witcher/">
        <Headr count={cartItems.length} />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Main products={data} add={add} />
                <Cart
                  cartItems={cartItems}
                  add={add}
                  remove={remove}
                  setCartItems={setCartItems}
                />
              </div>
            }
          />
          <Route path="/info" element={<Witcher1 />} />
          <Route path="/info1" element={<Witcher2 />} />
          <Route path="/info2" element={<Witcher3 />} />
          <Route path="/info3" element={<Witcher4 />} />
          <Route path="/info4" element={<Witcher5 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
