/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
export const TodoContext = createContext ()

export function TodoProvider({ children }) {
    // Utiliza el hook personalizado 'useLocalStorage' para obtener el estado 'item'
    // y la función 'saveItem' para manejar los datos de la lista de tareas en el almacenamiento local
    const { item, saveItem, loading, error } = useLocalStorage('TODO_Machine_V1', []);

    // Estado local para el término de búsqueda ingresado por el usuario
    const [searchTerm, setSearchTerm] = useState('');

    // Estado local para controlar si el modal está abierto o cerrado
    const [openModal, setOpenModal] = useState(false);

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

    // Función para agregar una nueva tarea
    const addTodo = (text) => {
        const newTodos = [...item];
        newTodos.push({
            text,
            Complete: false // Se corrigió "completeTodo" a "Complete" para ser coherente con el código.
        });
        // Guarda el nuevo estado de la lista de tareas en el almacenamiento local
        saveItem(newTodos);
    };

    // Devuelve el componente TodoContext.Provider con los valores del contexto.
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchTerm,
            setSearchTerm,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {children}
        </TodoContext.Provider>
    );
}
