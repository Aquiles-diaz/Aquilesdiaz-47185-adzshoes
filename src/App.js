import React from "react";
import "./App.css"
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./Components/ItemListContainer/ItemsListContainer";
import CartProvider from '../src/Context/CartContext';
import Cart from "../src/Components/cart/cart";
import {Checkout} from '../src/Components/Checkout/Checkout';
import ItemDetailContainer from "../src/Components/ItemDetailContainer/ItemDetailContainer";

import Error404 from "../src/Components/Error404";

function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/cart"} element={<Cart/>} />
            <Route path={"/checkout"} element={<Checkout/>} />
            <Route path={"*"} element={<Error404 />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
