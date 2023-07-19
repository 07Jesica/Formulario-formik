import SignContext from "../context/ContextSign";
import { useContext } from "react";
import { useFormik } from "formik";
import { ForgotPasswordSchema } from "../schemas/ForgotPasswordSchema";
import { Boton } from "../stories/Boton/Boton";
import Titulo from "../stories/Titulo/Titulo";

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
      <Titulo
      texto="Forgot Password"
      nivel={1}
      backgroundColor="blueviolet"
      textColor="white"></Titulo>
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
            <Boton
             label="Login"
             primary={true} 
             size="large"
             disabled={isSubmitting}
            >Remember me!</Boton>
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