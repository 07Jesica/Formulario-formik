import { Boton } from "./Boton";

export default {
  component: Boton,
};


// Stories
export const Primary = {
    args: {
      label: "Básico",
      label: " Saved Data ",
      primary: true,
    },
  };

  export const Secondary = {
    args: {
      label: "Avanzado",
      label: "Save",
      primary: false,
    },
  };

  export const Large = {
    args: {
      label: "Grande",
      primary: false,
      size: "large",
    },
  };
  export const Medium = {
    args: {
      label: "Mediano",
      primary: false,
      size: "medium",
    },
  };
  export const Small = {
    args: {
      label: "Pequeñito",
      primary: true,
      size: "small",
    },
  };