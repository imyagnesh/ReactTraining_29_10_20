const initialState = {
    loading: false,
    error: false,
    data: [],
  };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOAD_PRODUCT_CATEGORY_REQUEST":
      return { ...state, loading: true };

    case "LOAD_PRODUCT_CATEGORY_SUCCESS":
      return { ...state, data: payload, loading: false };

    case "LOAD_PRODUCT_CATEGORY_FAIL":
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
