// Importación del archivo de estilos CSS para el componente TodoList
import "./TodoList.css";

/* eslint-disable react/prop-types */
// Componente funcional TodoList que actúa como contenedor de una lista de elementos (children)
export function TodoList({ children }) {
    // El componente simplemente devuelve un elemento <ul> con la clase CSS "TodoList"
    // y muestra los elementos pasados como hijos (children) dentro de la lista.
    return (
        <ul className="TodoList">
            { children }
        </ul>
    );
}
