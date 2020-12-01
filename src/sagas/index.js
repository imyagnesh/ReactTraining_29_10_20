import { all, fork } from 'redux-saga/effects'
import products from './productsSaga'
import ProductCategory from './ProductCategorySaga'

export default function* rootSaga() {
  yield all([fork(products), fork(ProductCategory)])
}
