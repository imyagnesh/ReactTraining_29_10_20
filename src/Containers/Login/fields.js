import FormTextInput from "../../Components/FormTextInput";

export const fields = [
  {
    name: "username",
    placeholder: "Username",
    initialvalue: "",
    component: FormTextInput,
    validate: (value) => {
      if (!value) {
        return "User Name is Required";
      }
    },
  },
  {
    name: "password",
    placeholder: "Password",
    type: "password",
    initialvalue: "",
    component: FormTextInput,
    validate: (value) => {
      if (!value) {
        return "Password is Required";
      }
    },
  },
];

export const initialValues = fields.reduce(
  (p, c) => ({ ...p, [c.name]: c.initialValue }),
  {}
);

