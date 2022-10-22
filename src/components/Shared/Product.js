import React, { useContext } from "react";
import { Link } from "react-router-dom";

//functions
import { Shorten, isInCart, quantityCount } from "../../helper/function";
//context
import { CartContext } from "../../context/CartContextProvider";
//style
import Style from "../Shared/Product.module.css"
//icon
import Trash from "../../assets/bin.png"

const Product = ({ productData }) => {
  const { state, dispatch } = useContext(CartContext);
  return (
    <div className={Style.container}>
      <img className={Style.cardImage} src={productData.image}alt="product-img"/>
      <h3>{Shorten(productData.title)}</h3>
      <p>{productData.price} $</p>
      <div className={Style.linkContainer}>
        <Link to={`/products/${productData.id}`}>details</Link>

        <div className={Style.buttonContainer}>

          {quantityCount(state, productData.id) > 1 && (<button className={Style.smallButton} onClick={() => dispatch({ type: "DECREASE", payload: productData })}>-</button>)}
          {quantityCount(state, productData.id) === 1 && (<button className={Style.smallButton} onClick={() => dispatch({ type: "REMOVE_ITEM", payload: productData })}><img src={Trash} alt="trash"/></button>)}
          {quantityCount(state, productData.id) > 0 && (<span className={Style.counter}>{quantityCount(state, productData.id)}</span>)}
          {isInCart(state, productData.id) ? (<button className={Style.smallButton} onClick={() => dispatch({ type: "INCREASE", payload: productData })}>+</button>) : (
           <button onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })}> Add to cart</button>)}
        </div>
      </div>
    </div>
  );
};

export default Product;
