import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import React from "react";

const FormTextInput = ({ field, form, options, ...props }) => {
  const isError = form.touched[field.name] && form.errors[field.name];
  return (
    <FormControl id={props.name} isInvalid={isError}>
      <FormLabel>{props.placeholder}</FormLabel>
      <Select {...props} {...field}>
        {options.map((x, i) => (
          <option key={i} value={x.value}>
            {x.text}
          </option>
        ))}
      </Select>
      {isError && (
        <FormErrorMessage>{form.errors[field.name]}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default FormTextInput;
