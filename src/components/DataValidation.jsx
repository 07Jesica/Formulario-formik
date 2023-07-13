import { useContext, useState } from "react";
import SignContext from "../context/ContextSign";
import { Formik,Form, Field, ErrorMessage } from "formik";
import { DataValidationSchema } from "../schemas/DataValidationSchema";

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
    <h3>Validation Data!</h3>
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
  <button type="button"  onClick={() => {
      setStep("Question");
   }}>next👉</button>
</fieldset>
    </Form>
    </Formik>
</div>
<p className="error"><span className="previous" 
     onClick={() => {
      setStep("Create");
   }}>👈 previous </span></p>
   <button className="btn" type="button"onClick={()=>setFormValues(savedValues)}>load saved data </button>
  </main>
  );
}

export default DataValidation;