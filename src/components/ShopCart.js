import React, { useContext } from "react";
import {Link} from "react-router-dom"

//component
import Cart from "./Shared/Cart";
//contaxt
import { CartContext } from "../context/CartContextProvider";
//Style
import Style from "../components/ShopCart.module.css"
const ShopCart = () => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className={Style.container}>
      <div className={Style.cartContainer}>
        {state.selectedItems.map((item) => (<Cart key={item.id} data={item} />))}
      </div>
      {
        state.itemsCounter > 0 && <div className={Style.payments}>
            <p><span>Total Items :</span> {state.itemsCounter}</p>
            <p><span>Total Payments :</span> {state.total}</p>
            <div className={Style.buttonContainer}>
                <button className={Style.checkout} onClick={()=> dispatch({type : "CHECKOUT"})}>check out</button>
                <button className={Style.clear} onClick={()=> dispatch({type : "CLEAR"})}>clear</button>
            </div>
        </div>
      }
      {
        state.checkout && <div className={Style.complete}>
            <h3>Cheked out Successfully</h3>
            <Link to="/products"> Buy More</Link>
        </div>
      }
            {
        !state.checkout && state.itemsCounter ===0 && <div className={Style.complete}>
            <h3>Want to Buy ?</h3>
            <Link to="/products"> Go to shop</Link>
        </div>
      }
    </div>
  );
};

export default ShopCart;
