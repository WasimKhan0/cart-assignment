import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./summary.css";
import ShopContext from "../ShopContext";

const Summary = () => {
    const {  getTotalAmount ,clearCart} = useContext(ShopContext);
    const totalAmount = getTotalAmount();

  const navigate = useNavigate();

  const goTo = () => {
    navigate("/");
    clearCart();
  };
//   useEffect(()=>{
//     clearCart();
//   },[])

  return (
    <div className="order-summary">
      <h1>Payment</h1>
      <p>Thank you for your purchase!</p>
      <p>Total Amount: ₹{totalAmount}</p>
      <button className="btn" onClick={goTo}>Proceed To Pay</button>
    </div>
  );
};

export default Summary;
