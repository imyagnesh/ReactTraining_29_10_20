const initialState = {
  loading: false,
  error: false,
  data: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOAD_PRODUCTS_REQUEST":
      return { ...state, loading: true };

    case "LOAD_PRODUCTS_SUCCESS":
      return { ...state, data: payload, loading: false };

    case "LOAD_PRODUCTS_FAIL":
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
