import React, { useContext, useEffect } from "react";
import { ProdContext } from "../../Context/productsContext";

const Index = ({ history }) => {
  const { products, loadProducts, deleteProduct } = useContext(ProdContext);

  useEffect(() => {
    loadProducts();
  }, [loadProducts])

  return (
    <div>
      <h1>Products</h1>
      <button onClick={() => history.push("/addProduct")}>Add Product</button>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Price</th>
            <th>quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.categroyId}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <button type="button" onClick={() => deleteProduct(product.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Index;
