import { combineReducers } from "redux";
import products from "./productsReducer";
import productCategory from "./productCategoryReducer";

export default combineReducers({
  products,
  productCategory,
});
