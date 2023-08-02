/* eslint-disable react/prop-types */
// Importa los iconos CompleteIcon y DeleteIcon desde el archivo './Icons'
import { CompleteIcon, DeleteIcon } from '../Icons';

// Importa el archivo de estilos './TodoItem.css'
import './TodoItem.css';

// Define el componente TodoItem
export function TodoItem(props) {
  return (
    // Renderiza un elemento <li> con la clase 'TodoItem'
    <li className="TodoItem">
      {/* Renderiza el componente CompleteIcon */}
      {/* Pasa las props 'completed' y 'onCompleted' al componente */}
      <CompleteIcon 
        completed={props.completed}
        onComplete={props.onComplete}
      />

      {/* Renderiza un párrafo con la clase 'TodoItem-p' */}
      {/* La clase 'TodoItem-p--complete' se agrega condicionalmente si 'props.completed' es verdadero */}
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {/* Renderiza el contenido de la tarea (props.ToDos) dentro del párrafo */}
        {props.ToDos}
      </p>

      {/* Renderiza el componente DeleteIcon */}
      {/* Pasa la prop 'onDelete' al componente */}
      <DeleteIcon 
        onDelete={props.onDelete}
      />
    </li>
  );
}
