/* eslint-disable import/no-anonymous-default-export */
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  LOAD_PRODUCTS,
  SUCCESS,
} from "../Constants/actionTypes";

const initialState = [];

export default (state = initialState, { type, payload }) => {
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
