/* eslint-disable react/prop-types */ // Desactiva las advertencias de PropTypes

// Importa los iconos MdDoneOutline y MdOutlineClose desde la librería 'react-icons/md'
import { FaX, FaCheck } from "react-icons/fa6";

// Importa el archivo de estilos './TodoIcons.css'
import './TodoIcons.css';

// Define un objeto llamado iconTypes que asigna funciones a cada tipo de icono
const iconTypes = {
    "check": (color) => <FaCheck className="Icon-svg" fill={color} />,
    "delete": (color) => <FaX className="Icon-svg" fill={color} />
}

// Define el componente TodoIcons
export function TodoIcons({ type, color, onClick }) {
    return (
    // Renderiza un elemento <span> con la clase 'Icon' y la clase específica del tipo de icono ('Icon-check' o 'Icon-delete')
    // El tipo de icono determina qué icono se muestra y se obtiene de la función correspondiente en el objeto iconTypes
    // El color del icono se pasa a la función que renderiza el icono
    // El onClick se pasa como prop al elemento <span> para que se ejecute cuando el usuario interactúe con el icono
    <span className={`Icon Icon-${type}`} onClick={onClick}>
        {iconTypes[type](color)}
    </span>
    );
}
