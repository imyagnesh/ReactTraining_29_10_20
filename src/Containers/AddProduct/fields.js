import FormTextInput from "../../Components/FormTextInput";
import FormikSelect from "../../Components/FormikSelect";
import FormikUpload from "../../Components/FormikUpload";

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
    name: "categroyId",
    placeholder: "Category",
    initialvalue: "",
    component: FormikSelect,
    validate: (value) => {
      if (!value) {
        return "Category is Required";
      }
    },
    options: [],
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
        return "Quantity is Required";
      }
    },
  },
  // {
  //   name: "files",
  //   placeholder: "Product Images",
  //   component: FormikUpload,
  //   validate: (value) => {
  //     if (!value) {
  //       return "Product Images is Required";
  //     }
  //   },
  // },
];

export const initialValues = fields.reduce(
  (p, c) => ({ ...p, [c.name]: c.initialValue }),
  {}
);
