import * as Yup from "yup";

export const CreateUserSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Enter a valid email") 
     .required("Email is required"),
    password: Yup.string()
    .min(8, "Password must be at least 8 characters") 
    .matches(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
      "Password should has lower, upper, nums"
    ),
    confirn: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirmation required"),
    NumberPhone: Yup.number().required("NumberPhone is required"),

});