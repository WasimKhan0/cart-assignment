import React, { useContext } from "react";
import "./cartItem.css";
import ShopContext from "../ShopContext";
import delBucket from '../../images/delBucket.png'
const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart,delCart } = useContext(ShopContext);

  const handleRemove = () => {
    delCart(id);
  };

  return (
    <div className="cart-item">
      <div className="item-details">
        <img src={productImage} alt={productName} />
        <div className="item-info">
          <p className="item-name">{productName}</p>
          <p className="item-meta">Color: OLIVE/MULTI</p>
          <p className="item-meta">Size: S</p>
          <p className="item-meta">In Stock</p>
          <div className="item-actions" onClick={handleRemove}>
             <img src={delBucket}></img> 
          </div>
        </div>
      </div>
      <div className="item-pricing">
        <p className="item-price">₹{price}</p>
        <div className="quantity-control">
          <button className="nBtn" onClick={() => removeFromCart(id)}> - </button>
          <input className="input" value={cartItems[id]} readOnly />
          <button className="nBtn" onClick={() => addToCart(id)}> + </button>
        </div>
        <p className="item-total">₹{price * cartItems[id]}</p>
      </div>
    </div>
  );
};

export default CartItem;
