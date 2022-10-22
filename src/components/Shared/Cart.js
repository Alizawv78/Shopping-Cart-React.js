import React, { useContext } from "react";

//context
import { CartContext } from "../../context/CartContextProvider";
//Style
import style from "../Shared/Cart.module.css"
//function
import { Shorten } from "../../helper/function"
//icon
import Trash from "../../assets/bin.png"
const Cart = (props) => {
  const { dispatch } = useContext(CartContext);
  const { image, title, price, quantity } = props.data;

  return (
    <div className={style.container}>
      <img className={style.productImage} src={image} alt="cartimg" />
      <div className={style.data}>
        <h3>{Shorten(title)}</h3>
        <p>{price} $</p>
      </div>
      <div>
        <span className={style.quantity}>{quantity}</span>
      </div>
      <div className={style.buttonContainer}>
        {quantity > 1 ? (<button onClick={() => dispatch({ type: "DECREASE", payload: props.data })}>-</button>) : (
          <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: props.data })}><img src={Trash} alt="trash"/></button>)}
        <button onClick={() => dispatch({ type: "INCREASE", payload: props.data })}>+</button>
      </div>
    </div>
  );
};

export default Cart;
