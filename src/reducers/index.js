import { combineReducers } from "redux";
import products from "./productsReducer";
import productCategory from "./productCategoryReducer";
import loading from "./loadingReducer";
import error from "./errorReducer";

export default combineReducers({
  products,
  productCategory,
  loading,
  error,
});
