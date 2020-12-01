import FormTextInput from "../../Components/FormTextInput";

export const fields = [
  {
    name: "name",
    placeholder: "Product Name",
    initialvalue: "",
    component: FormTextInput,
    validate: (value) => {
      if (!value) {
        return "Product Name is Required";
      }
    },
  },
  {
    name: "price",
    placeholder: "Price",
    type: "number",
    initialvalue: "",
    component: FormTextInput,
    validate: (value) => {
      if (!value) {
        return "Price is Required";
      }
    },
  },
  {
    name: "quantity",
    placeholder: "Quantity",
    type: "number",
    initialvalue: "",
    component: FormTextInput,
    validate: (value) => {
      if (!value) {
        return "Price is Required";
      }
    },
  },
];

export const initialValues = fields.reduce(
  (p, c) => ({ ...p, [c.name]: c.initialValue }),
  {}
);

