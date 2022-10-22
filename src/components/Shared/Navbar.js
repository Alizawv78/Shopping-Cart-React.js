import React,{ useContext } from 'react';
import {Link} from "react-router-dom";
//icon
import cartSHop from "../../assets/shopping-cart.png"
//style
import Style from "../Shared/Navbar.module.css"
//context
import { CartContext } from '../../context/CartContextProvider';

const Navbar = () => {

    const {state} = useContext(CartContext)

    return (
      <div className={Style.mainContainer}>
        <div className={Style.container}>
          <Link className={Style.productLink} to="/products">
            Product
          </Link>
          <div className={Style.iconContainer}>
            <Link to="/cart">
              <img src={cartSHop} alt="cart" />
            </Link>
            <span>{state.itemsCounter}</span>
          </div>
        </div>
      </div>
    );
};

export default Navbar;