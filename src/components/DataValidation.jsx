import { useContext, useState } from "react";
import SignContext from "../context/ContextSign";
import { Formik,Form, Field, ErrorMessage } from "formik";
import { DataValidationSchema } from "../schemas/DataValidationSchema";
import { Boton } from "../stories/Boton/Boton";
import Titulo from "../stories/Titulo/Titulo";

const initialValues = {
  country: "",
  city: "",
  NumberPhone:"",
}

const savedValues = {
  country: "Colombia",
  city: "Bogota",
  NumberPhone:"3133456789",
}

const DataValidation = () => {
  const { setStep } = useContext(SignContext);
  const [formValues, setFormValues] = useState(null);
  
  return (
  <main>
    <Titulo
     texto="Data Validation..."
     nivel={1}
     backgroundColor="blueviolet"
     textColor="white"
     ></Titulo>
   
    <div className="card">
    <Formik 
     initialValues={formValues || initialValues}
     validationSchema={DataValidationSchema}
     enableReinitialize
      >
    <Form  autoComplete="off"> 
    <fieldset>
   <label htmlFor="country">Country:</label>
  <Field id="country" name="country" as="select" >
            <option value="">select your country</option>
            <option value="Colombia">Colombia</option>
  </Field>
          <ErrorMessage
                name="country"
                component="p"
                className="error-message"
              />               
    </fieldset>
    <fieldset>
   <label htmlFor="city">City:</label>
   <Field id="city" name="city" as="select" >
            <option value="">Select your City</option>
                        <option value="Barranquilla">Barranquilla</option>
                        <option value="Cartagena">Cartagena</option>
                        <option value="Bogota">Bogota DC</option>
                        <option value="Medellin">Medellin</option>
                        <option value="Cali">Cali</option>
               <ErrorMessage
                name="city"
                component="p"
                className="error-message"
              />               
    </Field>
    </fieldset>
    <fieldset>
   <label htmlFor="NumberPhone">Number Phone:</label>
   <Field id="NumberPhone" name="NumberPhone" type="text" 
  autoFocus />
   <ErrorMessage
                name="NumberPhone"
                component="p"
                className="error-message"
              />
    </fieldset>
<fieldset>
  <Boton
   label="Login"
   primary={true} 
   size="large" 
   onClick={() => {
    setStep("Question");
 }}>next👉</Boton>
 
</fieldset>
    </Form>
    </Formik>
</div>
<p className="error"><span className="previous" 
     onClick={() => {
      setStep("Create");
   }}>👈 previous </span></p>
   <Boton
    label="Saved Data"
    Secondary ={true} 
    size="small"
    onClick={()=>setFormValues(savedValues)}
   >load saved data </Boton>
  </main>
  );
}

export default DataValidation;