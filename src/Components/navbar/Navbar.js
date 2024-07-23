import React, { useContext, useEffect, useState } from "react";
import "./navbar.css";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../images/9.png";
import ShopContext from "../ShopContext";
// import easycart from '../../images/easycart.webp'

const Navbar = () => {
  const { category, setCategory, cartItems, searchTerm, setSearchTerm, getTotalAmount } = useContext(ShopContext);
  const location = useLocation();
  const pathname = location.pathname; // e.g., "/cart"
  const pathSegments = pathname.split('/'); // ["", "cart"]
  const segment = pathSegments[1]; // "cart"
  let totAmount = getTotalAmount();

  useEffect(() => {
    console.log("totAmount-->", totAmount)
    totAmount = getTotalAmount();
  }, [])
  const handleCategory = (event) => {
    setCategory(event.target.value);
    console.log("cart->", cartItems);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="navbar">
      <div className="links">

        <NavLink className="link1" to="/">EasyCart<span className="com">.com</span></NavLink>

        {segment === '' ? <><div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div></> : <></>}

        <div className="right">
          {segment === '' ? <><div className="category">
            <select value={category} onChange={handleCategory}>
              <option value="all">All</option>
              <option value="tech">Tech</option>
              <option value="clothes">Clothes</option>
              <option value="food">Food</option>
            </select>
          </div></> : <></>}

          <NavLink className="link1" to="/cart">
            <a href="" className="logo">
              {totAmount !== 0 ? <div className="cart-dot"></div> : null}
              <img className="logo" src={logo} alt="Logo" />
            </a>
          </NavLink>
        </div>


      </div>
    </div>
  );
};

export default Navbar;
