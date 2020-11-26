import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";

const FormTextInput = ({ field, form, ...props }) => {
  const isError = form.touched[field.name] && form.errors[field.name];
  return (
    <FormControl id={props.name} isInvalid={isError}>
      <FormLabel>{props.placeholder}</FormLabel>
      <Input {...props} {...field} />
      {isError && (
        <FormErrorMessage>{form.errors[field.name]}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default FormTextInput;
