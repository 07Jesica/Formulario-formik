import SignContext from "../context/ContextSign";
import { useContext } from "react";
import { useFormik } from "formik";
import { ForgotPasswordSchema } from "../schemas/ForgotPasswordSchema";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);

  await new Promise((resolve) => setTimeout(resolve, 2000));
  

  alert(`Se ha enviado su password a la cuenta ${values.email}!` );

  // Limpia al formulario
  actions.resetForm();
};
  

const ForgotPassword = () => {
  const { setStep } = useContext(SignContext);
  const {values, handleChange, errors,  handleBlur, handleSubmit, isSubmitting } = useFormik({
    initialValues:{
      email: "",
    },
    validationSchema: ForgotPasswordSchema,
    onSubmit
  });
  console.log(isSubmitting);

  return (
    <main>
        <h3>Forgot Password</h3>
        <div className="card">
        <form onSubmit={handleSubmit} autoComplete="off">
            <fieldset>
                <label htmlFor="email">Email</label>
                <input
                 type="email"
                  id="email"
                   value={values.email}
                   onChange={handleChange}
                   onBlur={handleBlur}
                    autoFocus 
                    className={errors.email ? "error-forgot-input" : ""}
                    />
             {errors.email && <p className="error-message">{errors.email}</p>}
            </fieldset>
            <button disabled={isSubmitting} type="submit"> Remember me!</button>
        </form>
        </div>
        <p>already have an account?<span
        onClick={() => {
          setStep("SignIn");
       }} >Sign In!</span></p>
    </main>
   
  );
}

export default ForgotPassword;