import SignContext from "../context/ContextSign";
import { useContext } from "react";
import { Boton } from "../stories/Boton/Boton";
import Titulo from "../stories/Titulo/Titulo";
import react from "../Imagen/Img/react.jpg";



  const Questions = () => {
  const { setStep } = useContext(SignContext);

return (
  <main>
    <Titulo
      texto="Home"
      nivel={1}
      backgroundColor="blueviolet"
      textColor="white"
    ></Titulo>
    <div className="card">
      <img src={react} />
          <Boton label="Iniciar Sesion"
                secondary={true} 
                size="medium"
                onClick={() => {
                  setStep("SignIn");
               }} 
                > SignIn
                </Boton>
                <Boton label="Create User"
                secondary={true} 
                size="medium"
                onClick={() => {
                  setStep("Create");
               }} 
                > SignIn
                </Boton>
   
        </div>
    
   
     
      
   
      
  </main>
  );
}

export default Questions;