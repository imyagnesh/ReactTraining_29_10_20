import { takeLatest, call, put } from "redux-saga/effects";
import axios from '../utils/axios'

function* loadProductCategory() {
  try {
    const products = yield call(axios.get, 'productCategory');
    yield put({ type: "LOAD_PRODUCT_CATEGORY_SUCCESS", payload: products.data })
  } catch (error) {
    yield put({ type: "LOAD_PRODUCT_CATEGORY_FAIL", payload: error })
  }
}

export default function* productCategorySaga() {
  yield takeLatest("LOAD_PRODUCT_CATEGORY_REQUEST", loadProductCategory);
}
