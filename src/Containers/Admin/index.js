import React, { useEffect } from "react";
import { connect } from "react-redux";

const Index = ({
  history,
  productCategory,
  products,
  loadProducts,
  loadProductsCategory,
}) => {
  useEffect(() => {
    loadProducts();
    loadProductsCategory();
  }, [loadProducts, loadProductsCategory]);

  return (
    <div>
      <h1>Products</h1>
      <button onClick={() => history.push("/addProduct")}>
        Add Product
      </button>
      {products.loading ? (
        <h1>Loading...</h1>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Category</th>
              <th>Price</th>
              <th>quantity</th>
            </tr>
          </thead>
          <tbody>
            {productCategory.data.length > 0 && products.data.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.categoryName}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
    productCategory: state.productCategory,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadProducts: () => dispatch({ type: "LOAD_PRODUCTS_REQUEST" }),
    loadProductsCategory: () =>
      dispatch({ type: "LOAD_PRODUCT_CATEGORY_REQUEST" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
