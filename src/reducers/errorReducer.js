/* eslint-disable import/no-anonymous-default-export */
import { FAIL } from "../Constants/actionTypes";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  const matches = /(.*)_(REQUEST|FAIL)/.exec(type);
  if (!matches) {
    return state;
  }
  const [, requestName, requestState] = matches;
  if (requestState === FAIL) {
    return { ...state, [requestName]: payload };
  }
  const { [requestName]: data, ...rest } = state;
  return rest;
};
