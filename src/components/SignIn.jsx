import { useContext, useState } from "react";
import SignContext from "../context/ContextSign";
import { Formik, Form, Field,  ErrorMessage } from "formik";
import { SignInSchema } from "../schemas/SignInSchema";
import { Boton } from "../stories/Boton/Boton";
import Titulo from "../stories/Titulo/Titulo";

const initialValues = {
  email:"",
  password: "",
}

const SignIn = () => {
const { setStep } = useContext(SignContext);

 return (
 <main>
  <Titulo
    texto="Welcome!"
    nivel={1}
    backgroundColor="blueviolet"
    textColor="white"
  ></Titulo>
  <div className="card">
   
  <Formik 
  initialValues={initialValues}
  validationSchema={SignInSchema}
  >
    {({dirty, resetForm}) => {
       return (
        
    <Form autoComplete="off" 
   > 
        <fieldset>
            <label htmlFor="email">Email</label>
            <Field type="email" 
            id="email" name="email" autoFocus  />
             <ErrorMessage
                name="email"
                component="p"
                className="error-message"
              /> 
           
        </fieldset>
        <fieldset>
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" 
             id="password"
        
             />
              <ErrorMessage
                name="password"
                component="p"
                className="error-message"
              />
            
        </fieldset>
        <Boton 
         label="Login"
         primary={true} 
         size="large"
         disabled={!dirty}
        onClick={() => resetForm()}
        > Login
        </Boton>
 
        <div className="forgot" onClick={() => {
                    setStep("Forgot");
                 }}>Forgot paassword?</div>
    </Form>
     );
  }}
    </Formik>
   </div>
    <p>Don&apos;t have an account?{""}
     <span onClick={() => {
        setStep("Create");
     }} >CreateUser</span>
    </p>
    <p>
     <span onClick={() => {
        setStep("Question");
     }} >Home</span>
    </p>
 </main>
  );
};


export default SignIn;