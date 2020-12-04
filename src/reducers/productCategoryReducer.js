/* eslint-disable import/no-anonymous-default-export */
import {
  LOAD_PRODUCT_CATEGORY,
  SUCCESS,
} from "../Constants/actionTypes";

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case `${LOAD_PRODUCT_CATEGORY}_${SUCCESS}`:
      return payload;

    default:
      return state;
  }
};
