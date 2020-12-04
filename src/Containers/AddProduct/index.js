import React, { useContext, useEffect, useState } from "react";
import FormikForm from "../../Components/FormikForm";
import { fields, initialValues } from "./fields";
import { ProdContext } from '../../Context/productsContext'
import { ProdCategoryContext } from '../../Context/productCategoriesContext'

const btnProps = {
  children: "Submit",
  colorScheme: "blue",
};

const Index = () => {
  const { addProduct } = useContext(ProdContext);
  const { loadProductCategories, productCategories } = useContext(ProdCategoryContext);

  const [formFields, setFormFields] = useState(null);

  // to get Product category
  // component did mount
  

  // componentDidUpdate
  useEffect(() => {
    if (productCategories.length > 0) {
      const updatedFields = fields.reduce((p, c) => {
        if (c.name === "categroyId") {
          c.options = productCategories.map((x) => ({
            value: x.id,
            text: x.cagegory,
          }));
        }
        return [...p, c];
      }, []);

      setFormFields(updatedFields);
    } else {
      loadProductCategories();
    }
  }, [productCategories, loadProductCategories]);

  if (formFields) {
    return (
      <FormikForm
        fields={formFields}
        initialValues={initialValues}
        onSubmit={addProduct}
        btnProps={btnProps}
      />
    );
  }

  return null;
};





export default Index;
