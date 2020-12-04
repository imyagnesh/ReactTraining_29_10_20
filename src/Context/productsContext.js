import React, {
  createContext,
  useCallback,
  useEffect,
  useReducer,
} from "react";
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  LOAD_PRODUCTS,
  SUCCESS,
} from "../Constants/actionTypes";
import axios from "../utils/axios";
import history from '../utils/history'

export const ProdContext = createContext();

const productsReducer = (state, { type, payload }) => {
  switch (type) {
    case `${LOAD_PRODUCTS}_${SUCCESS}`:
      return payload;

    case `${ADD_PRODUCT}_${SUCCESS}`:
      return [...state, payload];

    case `${DELETE_PRODUCT}_${SUCCESS}`: {
      const index = state.findIndex((x) => x.id === payload);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    }

    default:
      return state;
  }
};

const ProductsContext = ({ children }) => {
  
  const [products, dispatchProducts] = useReducer(productsReducer, []);

  const loadProducts = useCallback(async () => {
    try {
      const products = await axios.get("products");
      dispatchProducts({
        type: `${LOAD_PRODUCTS}_${SUCCESS}`,
        payload: products.data,
      });
    } catch (error) {}
  }, []);

  const addProduct = useCallback(async (data) => {
    try {
      const product = await axios.post("products", data);
      dispatchProducts({
        type: `${ADD_PRODUCT}_${SUCCESS}`,
        payload: product.data,
      });
      history.push("/admin");
    } catch (error) {}
  }, []);

  const deleteProduct = useCallback(async (id) => {
    try {
      await axios.delete(`products/${id}`);
      dispatchProducts({
        type: `${DELETE_PRODUCT}_${SUCCESS}`,
        payload: id,
      });
    } catch (error) {}
  }, []);

  return (
    <ProdContext.Provider
      value={{
        loadProducts,
        addProduct,
        deleteProduct,
        products,
      }}
    >
      {children}
    </ProdContext.Provider>
  );
};

export default ProductsContext;
