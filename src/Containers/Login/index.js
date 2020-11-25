import React, { useState } from "react";
import {
  Input,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

const validate = (data) => {
  const err = {};
  if (!data.username) {
    err.username = "Username is Required";
  }
  if (!data.username) {
    err.password = "Password is Required";
  }
  return err;
};

const Index = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState({});

  // store the date in state
  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formValidate = validate(form);
    if (Object.keys(formValidate).length > 0) {
      setError(formValidate);
    } else {
      alert(JSON.stringify(form));
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <FormControl id="username" isInvalid={!!error.username}>
        <FormLabel>Username</FormLabel>
        <Input
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={onChange}
        />
        {error.username && <FormErrorMessage>{error.username}</FormErrorMessage>}
      </FormControl>
      <FormControl id="password" isInvalid={!!error.password}>
        <FormLabel>Password</FormLabel>
        <Input
          name="password"
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={onChange}
        />
        {error.password && <FormErrorMessage>{error.password}</FormErrorMessage>}
      </FormControl>
      <Button type="submit">Login</Button>
    </form>
  );
};

export default Index;
