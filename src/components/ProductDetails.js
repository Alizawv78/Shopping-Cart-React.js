import React, { useContext } from "react";
import { Link,useParams } from "react-router-dom";

//Context
import { ProductsContext } from "../context/ProductContextProvider";
//Style
import Style from "../components/ProductDetails.module.css"

const ProductDetails = (props) => {
  const params = useParams()
  const id = params.id;
  const data = useContext(ProductsContext);
  const product = data[id - 1];
  const { image, title, description, price, category } = product;

  return (
    <div className={Style.container}>
      <img className={Style.image} src={image} alt="product-img" />
      <div className={Style.textContainer}>
        <h3>{title}</h3>
        <p className={Style.description}>{description}</p>
        <p className={Style.category}><span className={Style.category}>Category :   </span>{category}</p>
        <div className={Style.buttonContainer}>
            <span className={Style.price}>{price} $</span>
            <Link to="/products">Back to Shop</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
