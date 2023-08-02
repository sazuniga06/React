/* eslint-disable react/prop-types */
// Importa el componente TodoIcons desde el archivo './TodoIcons'
import { TodoIcons } from "./TodoIcons";

// Define el componente CompleteIcon
export function CompleteIcon({ completed, onComplete }) {
  return (
    // Renderiza el componente TodoIcons
    // Pasa las props 'type', 'color', y 'onClick' al componente
    <TodoIcons
      type="check"
      color={completed ? 'green' : 'gray'}
      onClick={onComplete}
    />
  );
}

// Define el componente DeleteIcon
export function DeleteIcon({ onDelete }) {
  return (
    // Renderiza el componente TodoIcons
    // Pasa las props 'type', 'color', y 'onClick' al componente
    <TodoIcons
      type="delete"
      color="gray"
      onClick={onDelete}
    />
  );
}
