import SignContext from "../context/ContextSign";
import { useContext, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { QuestionSchema } from "../schemas/QuestionSchema";
import { Boton } from "../stories/Boton/Boton";
import Titulo from "../stories/Titulo/Titulo";

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
    <Titulo
      texto="Favorite framework..."
      nivel={1}
      backgroundColor="blueviolet"
      textColor="white"
    ></Titulo>
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
               <Boton label="Save"
                primary={true} 
                size="large"
                disabled={!dirty}  onClick={() => resetForm()}> Save
                </Boton>
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
       
       <Boton 
        label="Saved Data"
        Secondary ={true} 
        size="small"
        onClick={()=>setFormValues(savedValues)}
        >saved data</Boton>
   
      
  </main>
  );
}

export default Questions;