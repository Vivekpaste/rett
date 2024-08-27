import * as yup from "yup";

export const signupSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Email must be formatted like joe@gmail.com").required("Email is required"),
  zipCode: yup.string()
               .matches(/^[0-9]{5}$/, "Zip must be 5 numeric characters")
               .required("Zip code is required"),
  number: yup.string()
             .matches(/^\(\d{3}\)\s\d{3}\s-\s\d{4}$/, "Number must be formatted like (123) 456 - 7890")
             .required("Number is required"),
  numberType: yup.string().required("A number type must be selected"),
  specialty: yup.string().required("A specialty must be selected"),
});