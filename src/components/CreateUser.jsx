import { useContext } from "react";
import { useState } from "react";
import SignContext from "../context/ContextSign";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { CreateUserSchema } from "../schemas/CreateUserSchema";


 const initialValues={
  fullName:"",
  email:"",
  password:"",
  confirn:"",
}

const savedValues = {
  fullName:"stella palomino",
  email:"HolaMundo123@hotmal.com",
  password:"Q_12378",
  confirn:"Q_1237",
}

const CreateUser = () => {
  const { setStep } = useContext(SignContext);
  const [formValues, setFormValues] = useState(null);

 
 

  return (
    <main>
    <h3>Welcome, Join us!</h3>
    <div className="card">
      <Formik 
       initialValues={formValues || initialValues}
      validationSchema={CreateUserSchema}
       enableReinitialize
      
      >
   
      
    <Form  autoComplete="off">
    <fieldset>
              <label htmlFor="fullName">Full name</label>
              <Field id="fullName" name="fullName" type="text"
               autoFocus />
              <ErrorMessage
                name="fullName"
                component="p"
                className="error-message"
              />
    </fieldset>
    <fieldset>
        <label htmlFor="email">Email</label>
        <Field id="email" name="email" type="email" 
       autoFocus/>
        <ErrorMessage
                name="email"
                component="p"
                className="error-message"
              />
    </fieldset>
    <fieldset>
            <label htmlFor="password">Password</label>
            <Field id="password" name="password" type="password" />
            <ErrorMessage
                name="password"
                component="p"
                className="error-message"
              />
        </fieldset>
        <fieldset>
            <label htmlFor="confirn">Confirn Password</label>
            <Field id="confirn" name="confirn" type="password" 
            />
            <ErrorMessage
                name="confirm"
                component="p"
                className="error-message"
              />
        </fieldset>
        <fieldset>
        <button type="button" onClick={() => {
      setStep("Data");
   }} >Next👉</button>
        </fieldset>
    </Form>
   </Formik>
  </div>
   <button className="btn" type="button"onClick={()=>setFormValues(savedValues)}>load saved data </button>
   
    </main>
  );
};


export default CreateUser;