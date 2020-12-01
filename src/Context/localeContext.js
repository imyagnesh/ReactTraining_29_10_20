import axios from "../utils/axios";
import { createContext, useCallback, useEffect, useState } from "react";
export const { Provider, Consumer } = createContext();

const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState("en");
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
    <Provider
      value={{
        locale,
        products,
        productCategory,
        error,
        refreshData: loadData,
        getCategoryName,
        onChangeLocale: (newLocale) => setLocale(newLocale),
      }}
    >
      {children}
    </Provider>
  );
};

export default LocaleProvider;
