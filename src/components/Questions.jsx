import SignContext from "../context/ContextSign";
import { useContext, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { QuestionSchema } from "../schemas/QuestionSchema";

const initialValues = {
    framework:"",
    terms: false,
  }

  const savedValues = {
    framework:"Angular",
    terms: true,
  }
  const Questions = () => {
  const { setStep } = useContext(SignContext);
  const [formValues, setFormValues] = useState(null);


return (
  <main>
    <h3>Favorite framework</h3>
    <div className="card">
      <Formik 
      initialValues={formValues || initialValues}
      validationSchema={QuestionSchema}
      enableReinitialize
     
    >
        {({dirty,resetForm}) => {
         
        return (        
 <Form    >
            <fieldset>
            <label htmlFor="framework">Favorite framework</label>
            <Field id="framework" name="framework" as="select" >
                        <option value="">select your framework</option>
                        <option value="React">React</option>
                        <option value="Vue">Vue</option>
                        <option value="Angular">Angular</option>
            </Field>
          
            <ErrorMessage
                name="framework"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
            <label htmlFor="terms">
              <Field id="terms" name="terms" type="checkbox"/> Accept terms and conditions
            </label>
              </fieldset>
              <ErrorMessage
                name="terms"
                component="p"
                className="error-message"
                
              />
                 <button type="submit" disabled={!dirty}  onClick={() => resetForm()}>Save</button>  
           </Form>
           );
   }}
    </Formik>
        </div>
      <p className="error"><span className="previous" 
     onClick={() => {
      setStep("Data");
   }}>👈 previous </span></p>
   
      <p>already have an account?<span
        onClick={() => {
          setStep("SignIn");
       }} >Sign In!</span></p>
       
      <button className="btn" type="button"onClick={()=>setFormValues(savedValues)}>saved data</button>
      
  </main>
  );
}

export default Questions;