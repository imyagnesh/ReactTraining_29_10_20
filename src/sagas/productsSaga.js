import { takeLatest, call, put, select, all, fork } from "redux-saga/effects";
import axios from "../utils/axios";

function* loadProducts() {
  try {
    const products = yield call(axios.get, "products");
    yield put({ type: "LOAD_PRODUCTS_SUCCESS", payload: products.data });
  } catch (error) {
    yield put({ type: "LOAD_PRODUCTS_FAIL", payload: error });
  }
}

const loadProductCategory = (state) => state.productCategory.data;
const loadProductsFromState = (state) => state.products.data;

function* onLoadProductCategorySuccess() {
  const categoryData = yield select(loadProductCategory);
  const products = yield select(loadProductsFromState);
   
  const newProducts = products.reduce((p, c) => {
    return [...p, {...c, categoryName: categoryData.find(x => x.id ===  c.categroyId).cagegory  }]
  }, []);
  
  yield put({ type: "LOAD_PRODUCTS_SUCCESS", payload: newProducts });
}

function* loadProductCategorySuccess() {
  yield takeLatest(
    "LOAD_PRODUCT_CATEGORY_SUCCESS",
    onLoadProductCategorySuccess
  );
}

function* productSaga() {
  yield takeLatest("LOAD_PRODUCTS_REQUEST", loadProducts);
}

export default function* rootProducts() {
  yield all([fork(productSaga), fork(loadProductCategorySuccess)])
}
