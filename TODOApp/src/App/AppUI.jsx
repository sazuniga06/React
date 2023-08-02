/* eslint-disable react/prop-types */
import React from "react"
import { CreateToDo } from '../ToDoMethods/ButtonCreate';
import { TodoCounter } from '../ToDoMethods/Counter';
import { TodoItem } from '../ToDoMethods/Item';
import { TodoList } from '../ToDoMethods/List';
import { TodoSearch } from '../ToDoMethods/Search';

export function AppUI ({loading, error,completedTodos,totalTodos,searchTerm,setSearchTerm,searchedTodos,completeTodo,deleteTodo}){
    return(
        <React.Fragment>
        {/* Componente que muestra la cantidad de tareas completadas y el total */}
            <TodoCounter Completed={completedTodos} Total={totalTodos} />
        
            {/* Componente para buscar tareas */}
            <TodoSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        
            {/* Lista de tareas */}
            <TodoList>
                {loading && <p>Cargando...</p>}
                {(!loading && searchedTodos.length == 0) && <p>¡¡¡Crea tu primer ToDo!!!</p>}
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
        <CreateToDo />
        </React.Fragment>
    )
}