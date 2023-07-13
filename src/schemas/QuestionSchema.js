import * as Yup from "yup";

export const QuestionSchema = Yup.object().shape({
    framework: Yup.string()
    .oneOf(["react", "vue", "angular"], "Must select a valid framework")
    .required("Framework required"),
  terms: Yup.bool()
    .oneOf([true], "You must accept the terms")
    .required("Required"),
});