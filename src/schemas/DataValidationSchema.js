import * as Yup from "yup";

export const DataValidationSchema = Yup.object().shape({
    country: Yup.string()
    .oneOf(["Colombia"], "Must select a valid Country")
    .required("Country required"),
    city: Yup.string()
    .oneOf(["Cali", "Bogota","Cartagena", "Medellin"], "Must select a valid City")
    .required("City is required"),
    framework: Yup.string()
    .oneOf(["react", "vue", "angular"], "Must select a valid framework")
    .required("Framework required"),
  terms: Yup.bool()
    .oneOf([true], "You must accept the terms")
    .required("Required"),
    });