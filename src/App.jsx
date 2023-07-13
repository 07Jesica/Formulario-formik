import SignIn from "./components/SignIn";
import CreateUser from "./components/CreateUser";
import ForgotPassword from "./components/forgotPassword";
import Questions from "./components/Questions";
import DataValidation from "./components/DataValidation";
import { useState } from "react";
import  SignContext from "./context/ContextSign";



function App() {
const [step, setStep] = useState("Question");



return (
  <>
    <SignContext.Provider value={ { step, setStep }}>
    <div className="container">
    {step === "SignIn" && <SignIn />}
    {step === "Forgot" && <ForgotPassword /> }
    {step === "Create"&& <CreateUser />  }
    {step === "Data" && <DataValidation /> } 
    {step ==="Question" && <Questions /> }
      </div>
    </SignContext.Provider>
    </>
  );
}

export default App;
