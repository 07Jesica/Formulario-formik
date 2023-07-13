import * as Yup from "yup";

export const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string()
    .email("Enter a valid email")
    .required("Enter is required"),
});