import { useContext, useState } from "react";
import SignContext from "../context/ContextSign";
import { Formik, Form, Field,  ErrorMessage } from "formik";
import { SignInSchema } from "../schemas/SignInSchema";

const initialValues = {
  email:"",
  password: "",
}

const SignIn = () => {
const { setStep } = useContext(SignContext);

 return (
 <main>
  <h3>Welcome!!</h3>
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
        <button 
        type="submit" disabled={!dirty}
        onClick={() => resetForm()} >Login</button>
 
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
 </main>
  );
};


export default SignIn;