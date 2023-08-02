// Importa ReactDOM desde "react-dom"
import ReactDOM from "react-dom";

// Importa los estilos del modal desde el archivo "Modal.css"
import "./Modal.css";

// Define el componente Modal
export function Modal({ children }) {
  // Utiliza ReactDOM.createPortal() para renderizar el contenido del modal
  // en un elemento con el id "modal" en el DOM
  return ReactDOM.createPortal(
    <div className="ModalBackground">
      {children}
    </div>,
    document.getElementById('modal')
  );
}
