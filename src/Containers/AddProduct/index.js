import React from "react";
import FormikForm from "../../Components/FormikForm";
import { fields, initialValues } from "./fields";

const btnProps = {
  children: "Submit",
  colorScheme: "blue",
};

const Index = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <FormikForm
      fields={fields}
      initialValues={initialValues}
      onSubmit={onSubmit}
      btnProps={btnProps}
    />
  );
};

export default Index;
