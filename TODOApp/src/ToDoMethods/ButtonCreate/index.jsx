/* eslint-disable react/prop-types */
// Importación del archivo de estilos CSS para el componente CreateToDo
import { useState } from "react";
import "./CreateToDo.css";

export function CreateToDo({ setOpenModal }) {
    const [isButtonClicked, setButtonClicked] = useState(false);
  
    const handleButtonClick = () => {
      setOpenModal((state) => !state);
      setButtonClicked(!isButtonClicked);
    };

  
    // Retorno del componente con un botón que muestra un símbolo "+" y tiene una clase CSS "ButtonCreateToDo"
    return (
      <button
        className={`ButtonCreateToDo ${isButtonClicked ? "start" : ""}`}
        onClick={handleButtonClick}
      >
        +
      </button>
    );
  }