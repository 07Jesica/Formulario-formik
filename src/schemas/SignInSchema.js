import * as Yup from "yup";

export const SignInSchema = Yup.object().shape({
    email: Yup.string()
    .email("Enter a valid email") 
    .required("Enter is required"),
    password: Yup.string()
    .min(8, "Password must be at least 8 characters") 
    .matches(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
      "Password should has lower, upper, nums"
    ),
});