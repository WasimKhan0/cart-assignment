import React, { useContext } from "react";
import "./item.css";
import ShopContext from "../ShopContext";

const Item = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems, removeFromCart } = useContext(ShopContext);
  const cartItemAmount = cartItems[id] || 0;

  return (
    <div className="product">
      <img src={productImage} alt={productName} />

      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>₹{price}</p>
        {
          cartItemAmount > 0 ? <>
            <div className="plus-minus">
              <p onClick={() => removeFromCart(id)}>-</p>
              <p>{cartItemAmount}</p>
              <p onClick={() => addToCart(id)}>+</p>
            </div>
          </> : <>
            <button className="add" onClick={() => addToCart(id)}>
              Add To Cart
              {cartItemAmount > 0 && <span className="cart-count">{cartItemAmount}</span>}
            </button>
          </>
        }

      </div>
    </div>
  );
};

export default Item;
