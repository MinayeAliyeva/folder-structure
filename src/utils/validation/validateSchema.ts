import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Minimum 3 characher must be")
    .required("Name is required"),
  age: Yup.number()
    .required("Age is required")
    .min(0, "Age is positive number")
    .integer("Age is integer"),
});
