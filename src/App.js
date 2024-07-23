import "./App.css";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar.js";
import Cart from "./Components/cart/Cart.js"
import Shop from "./Components/shop/Shop.js"
import { ShopContextProvider } from "./Components/ShopContext";
import Summary from "./Components/summary/Summary.js";

function App() {
  return (
    <ShopContextProvider>

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/summary" element={<Summary/>} />

      </Routes>
    </BrowserRouter>

    </ShopContextProvider>

  );
}

export default App;
