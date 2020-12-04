import { takeLatest, call, put } from "redux-saga/effects";
import { FAIL, LOAD_PRODUCT_CATEGORY, REQUEST, SUCCESS } from "../Constants/actionTypes";
import axios from '../utils/axios'

function* loadProductCategory() {
  try {
    const products = yield call(axios.get, 'productCategory');
    yield put({ type: `${LOAD_PRODUCT_CATEGORY}_${SUCCESS}`, payload: products.data })
  } catch (error) {
    yield put({ type: `${LOAD_PRODUCT_CATEGORY}_${FAIL}`, payload: error })
  }
}

export default function* productCategorySaga() {
  yield takeLatest(`${LOAD_PRODUCT_CATEGORY}_${REQUEST}`, loadProductCategory);
}
