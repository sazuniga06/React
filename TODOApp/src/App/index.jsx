// Importaciones de estilos y componentes
import './App.css';
import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { AppUI } from './AppUI';



// Componente principal de la aplicación
function App() {
  // Utiliza el hook personalizado 'useLocalStorage' para obtener el estado 'todos'
  // y la función 'saveTodos' para manejar los datos de la lista de tareas en el almacenamiento local
  const {item, saveItem, loading, error} = useLocalStorage('TODO_Machine_V1', []);
  const [searchTerm, setSearchTerm] = useState('');

  // Calcula la cantidad de tareas completadas y el total de tareas en la lista
  const completedTodos = item.filter((todo) => todo.Completed).length;
  const totalTodos = item.length;

  // Filtra las tareas en base al término de búsqueda ingresado por el usuario
  const searchedTodos = item.filter((todo) =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Función para marcar una tarea como completada
  const completeTodo = (text) => {
    const newTodos = item.map((todo) =>
      todo.text === text ? { ...todo, Completed: true } : todo
    );
    // Guarda el nuevo estado de la lista de tareas en el almacenamiento local
    saveItem(newTodos);
  };

  // Función para eliminar una tarea
  const deleteTodo = (text) => {
    const newTodos = item.filter((todo) => todo.text !== text);
    // Guarda el nuevo estado de la lista de tareas en el almacenamiento local
    saveItem(newTodos);
  };

  return (
    <AppUI   
    loading = {loading}
    error = {error}    
    completedTodos = {completedTodos} 
    totalTodos ={totalTodos}
    searchTerm  = {searchTerm}
    setSearchTerm = {setSearchTerm}
    searchedTodos = {searchedTodos}
    completeTodo = {completeTodo}
    deleteTodo = {deleteTodo}
    /> 
  );

}

export default App;
