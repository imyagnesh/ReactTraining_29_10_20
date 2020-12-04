import React, { createContext, useCallback, useReducer } from "react";
import { LOAD_PRODUCT_CATEGORY, SUCCESS } from "../Constants/actionTypes";
import axios from "../utils/axios";

export const ProdCategoryContext = createContext();

const productCategoryReducer = (state, { type, payload }) => {
  switch (type) {
    case `${LOAD_PRODUCT_CATEGORY}_${SUCCESS}`:
      return payload;

    default:
      return state;
  }
};

const ProductCategoriesContext = ({ children }) => {
  const [productCategories, dispatchProductCategories] = useReducer(
    productCategoryReducer,
    []
  );

  const loadProductCategories = useCallback(async () => {
    try {
      const products = await axios.get("productCategory");
      dispatchProductCategories({
        type: `${LOAD_PRODUCT_CATEGORY}_${SUCCESS}`,
        payload: products.data,
      });
    } catch (error) {}
  }, []);

  return (
    <ProdCategoryContext.Provider
      value={{
        loadProductCategories,
        productCategories,
      }}
    >
      {children}
    </ProdCategoryContext.Provider>
  );
};

export default ProductCategoriesContext;
