/* eslint-disable react/prop-types */
// Desactiva las advertencias de ESLint relacionadas con la validación de tipos de props en este componente.

import React, { useContext } from "react";
// Importa las dependencias necesarias de React, incluido el hook useContext.

// Importa varios componentes que se utilizarán en esta interfaz de usuario.
import { CreateToDo } from '../ToDoMethods/ButtonCreate';
import { TodoCounter } from '../ToDoMethods/Counter';
import { TodoItem } from '../ToDoMethods/Item';
import { TodoList } from '../ToDoMethods/List';
import { TodoSearch } from '../ToDoMethods/Search';
import { TodosCreate, TodosError, TodosLoading } from "../TodosStates";
import { TodoContext } from "../context";
import { Modal } from "../Modal";
import { TodoForm } from "../Forms";

export function AppUI() {
    // Obtiene los valores del contexto proporcionado por TodoContext.Provider.
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = useContext(TodoContext);

    return (
        // Fragmento de React, se utiliza para devolver múltiples elementos sin envolverlos en un div u otro elemento contenedor.
        <React.Fragment>
            {/* Componente que muestra la cantidad de tareas completadas y el total */}
            <TodoCounter />

            {/* Componente para buscar tareas */}
            <TodoSearch />

            {/* Lista de tareas */}
            <TodoList>
                {loading && <TodosLoading />} {/* Muestra el componente de carga si loading es verdadero */}
                {error && <TodosError />} {/* Muestra el componente de error si error es verdadero */}
                {(!loading && searchedTodos.length === 0) && <TodosCreate />} {/* Muestra el componente de creación de tareas si no hay tareas encontradas */}
                {searchedTodos.map((todo) => (
                    // Componente que muestra cada tarea
                    <TodoItem
                        key={todo.text}
                        ToDos={todo.text}
                        completed={todo.Completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            {/* Componente para agregar nuevas tareas */}
            <CreateToDo setOpenModal={setOpenModal} />

            {/* Renderiza el Modal solo si openModal es verdadero */}
            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
        </React.Fragment>
    );
}
