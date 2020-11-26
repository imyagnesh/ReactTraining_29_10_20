import { Button } from "@chakra-ui/react";
import { Field, Formik } from "formik";
import React from "react";

const index = ({ fields, btnProps, ...props }) => {
  return (
    <Formik initialValues {...props}>
      {({ handleSubmit, isSubmitting, errors }) => (
        <form onSubmit={handleSubmit}>
          <div>
            {errors && errors.xyz && <p>{errors.xyz}</p>}
          </div>
          {fields.map((x) => (
            <Field key={x.name} {...x} />
          ))}
          <Button disabled={isSubmitting} type="submit" {...btnProps} />
        </form>
      )}
    </Formik>
  );
};

export default index;
