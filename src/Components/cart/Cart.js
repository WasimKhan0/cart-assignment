import React, { useContext, useState } from "react";
import "./cart.css";
import Products from "../Products";
import ShopContext from "../ShopContext";
import CartItem from "../CartItem/CartItem";
import Summary from "../summary/Summary.js";  
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalAmount, clearCart } = useContext(ShopContext);
  const totalAmount = getTotalAmount();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Number of items per page
 
  // Calculate total pages
  const totalPages = Math.ceil(
    Products.filter((product) => cartItems[product.id] !== 0).length /
    itemsPerPage
  );

  // Get current items
  const currentItems = Products.filter(
    (product) => cartItems[product.id] !== 0
  ).slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const goTo = () => {
    navigate("/");
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleCheckout = () => {
    navigate('/summary'); 
  };


  

  return (
    <div className="cart">
      <div className="cart-header">
        <h1>My Cart</h1>
      </div>
      <div className="cart-body">
        <div className="cart-items">
          {currentItems.map((product) => (
            <CartItem key={product.id} data={product} />
          ))}
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                className={`page-button ${currentPage === index + 1 ? "active" : ""}`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
        <div className="cart-summary">
          <div className="promo-code">
            <input type="text" placeholder="Promo Code" />
            <button>Submit</button>
          </div>
          <div className="summary-details">
            <p>Shipping cost: ₹100</p>
            <p>Discount: -₹20</p>
            <p>Tax: TBD</p>
            <p className="total-amount">Estimated Total: ₹{totalAmount}</p>
          </div>
          <div className="cart-buttons">
            <button className="btn continue-shopping" onClick={goTo}>
              Continue Shopping
            </button>
            <button className="btn checkout" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
