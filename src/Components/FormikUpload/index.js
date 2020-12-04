import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const MyDropzone = ({ field, form, ...props }) => {
  const isError = form.touched[field.name] && form.errors[field.name];
  const onDrop = useCallback((acceptedFiles) => {
    form.setFieldValue(field.name, acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <FormControl id={props.name} isInvalid={isError}>
      <FormLabel>{props.placeholder}</FormLabel>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
      <div>{field.value && field.value.map((x) => <div>{x.name}</div>)}</div>
      {isError && (
        <FormErrorMessage>{form.errors[field.name]}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default MyDropzone;
