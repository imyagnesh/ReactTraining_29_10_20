import React from "react";
import FormikForm from "../../Components/FormikForm";
import { fields, initialValues } from "./fields";
import axios from "../../utils/axios";

const btnProps = {
  children: "Submit",
  colorScheme: "blue",
};

const Index = ({ history }) => {
  const onSubmit = async (data, values) => {
    const res = await axios.get('user');
    const isExist = res.data.find(x => x.username === data.username && x.password === data.password)
    if(isExist) {
      await localStorage.setItem('token', 'token');
      history.push('/admin')
    } else {
      values.setErrors({xyz: 'Username not availabele'});
      values.setSubmitting(false);
    }
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
