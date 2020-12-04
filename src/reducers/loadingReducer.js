/* eslint-disable import/no-anonymous-default-export */
import { REQUEST } from "../Constants/actionTypes";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  const matches = /(.*)_(REQUEST|SUCCESS|FAIL)/.exec(type);
  if (!matches) {
    return state;
  }
  const [, requestName, requestState] = matches;
  if (requestState === REQUEST) {
    return { ...state, [requestName]: true };
  }
  const { [requestName]: data, ...rest } = state;
  return rest;
};
