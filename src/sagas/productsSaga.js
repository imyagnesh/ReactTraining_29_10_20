import { takeLatest, call, put, select, all, fork } from "redux-saga/effects";
import { ADD_PRODUCT, DELETE_PRODUCT, FAIL, LOAD_PRODUCTS, LOAD_PRODUCT_CATEGORY, REQUEST, SUCCESS } from "../Constants/actionTypes";
import axios from "../utils/axios";
import history from "../utils/history";

function* loadProducts() {
  try {
    const products = yield call(axios.get, "products");
    yield put({ type: `${LOAD_PRODUCTS}_${SUCCESS}`, payload: products.data });
  } catch (error) {
    yield put({ type: `${LOAD_PRODUCTS}_${FAIL}`, payload: error });
  }
}

const loadProductCategory = (state) => state.productCategory.data;
const loadProductsFromState = (state) => state.products.data;

function* onLoadProductCategorySuccess() {
  const categoryData = yield select(loadProductCategory);
  const products = yield select(loadProductsFromState);

  const newProducts = products.reduce((p, c) => {
    return [
      ...p,
      {
        ...c,
        categoryName: categoryData.find((x) => x.id === c.categroyId).cagegory,
      },
    ];
  }, []);

  yield put({ type: `${LOAD_PRODUCTS}_${SUCCESS}`, payload: newProducts });
}

function* addProduct({ payload }) {
  try {
    const product = yield call(axios.post, "products", {
      ...payload,
      categroyId: Number(payload.categroyId),
    });
    yield put({ type: `${ADD_PRODUCT}_${SUCCESS}`, payload: product.data });
    yield call(history.push, "/admin");
  } catch (error) {
    yield put({ type: `${ADD_PRODUCT}_${FAIL}`, payload: error });
  }
}

function* deleteProduct({ payload }) {
  try {
    yield call(axios.delete, `products/${payload}`);
    yield put({ type: `${DELETE_PRODUCT}_${SUCCESS}`, payload });
  } catch (error) {
    yield put({ type: `${DELETE_PRODUCT}_${FAIL}`, payload: error });
  }
}

function* loadProductCategorySuccess() {
  yield takeLatest(
    `${LOAD_PRODUCT_CATEGORY}_${SUCCESS}`,
    onLoadProductCategorySuccess
  );
}

function* productSaga() {
  yield takeLatest(`${LOAD_PRODUCTS}_${REQUEST}`, loadProducts);
}

function* addProductSaga() {
  yield takeLatest(`${ADD_PRODUCT}_${REQUEST}`, addProduct);
}

function* deleteProductSaga() {
  yield takeLatest(`${DELETE_PRODUCT}_${REQUEST}`, deleteProduct);
}

export default function* rootProducts() {
  yield all([
    fork(productSaga),
    fork(loadProductCategorySuccess),
    fork(addProductSaga),
    fork(deleteProductSaga),
  ]);
}
