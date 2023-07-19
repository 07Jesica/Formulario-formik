import SignContext from "../context/ContextSign";
import { useContext } from "react";
import { useFormik } from "formik";
import { ForgotPasswordSchema } from "../schemas/ForgotPasswordSchema";
import Titulo from "../stories/Titulo/Titulo";
import { useLocalStorage } from "../Hook/useLocalstorage";

  

const ForgotPassword = () => {
  const { setStep } = useContext(SignContext);
  const [ text, setText ] = useLocalStorage('text', '');

  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);

    // Simula el envío de datos al backend
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Tiene acceso a los datos del formulario
    alert(`Se ha enviado su password a la cuenta!`);

    //Limpia al formulario
    actions.resetForm();
  };

  const { values, handleChange, errors,  handleBlur, handleSubmit, isSubmitting } = useFormik({
    initialValues:{
      email: "",
    },
    validationSchema: ForgotPasswordSchema,
    onSubmit,
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
        <form 
          onChange={e => setText(e.target.value)}
        onSubmit={handleSubmit} autoComplete="off">
            <fieldset>
                <label htmlFor="email">Email</label>
                <input
                 type="email"
                  id="email"
                  value={text}
                   onChange={handleChange}
                   onBlur={handleBlur}
                    autoFocus 
                    className={errors.email ? "error-forgot-input" : ""}
                    />
             {errors.email && <p className="error-message">{errors.email}</p>}
            </fieldset>
            <button className="boton" disabled={isSubmitting} type="submit">
            Remember me!
          </button>

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