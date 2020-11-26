import React, { useCallback, useEffect, useMemo, useState } from "react";
import axios from "../../utils/axios";

const Index = () => {
  const [products, setProducts] = useState([]);
  const [productCategory, setProductCategory] = useState([]);
  const [error, setError] = useState(null);

  const loadData = useCallback(async () => {
    try {
      const res = await Promise.all([
        axios.get("products"),
        axios.get("productCategory"),
      ]);
      setProducts(res[0].data);
      setProductCategory(res[1].data);
    } catch (error) {
      setError(error);
    }
  }, []);

  const getCategoryName = useCallback(
    (categroyId) =>
      productCategory.find((x) => x.id === categroyId)?.cagegory || "",
    [productCategory]
  );

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <div>
      <h1>Products</h1>
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
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{getCategoryName(product.categroyId)}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Index;
