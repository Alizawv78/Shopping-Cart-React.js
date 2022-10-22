import React, { useState, useEffect, createContext } from "react";
//API
import { getProduucts } from "../servisec/api";

export const ProductsContext = createContext();

const ProductContextProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setProducts(await getProduucts());
    };

    fetchAPI();
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductContextProvider;
