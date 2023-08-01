
import './App.css'
import { CreateToDo } from './ToDoMethods/CreateToDo'
import { TodoCounter } from './ToDoMethods/TodoCounter'
import { TodoItem } from './ToDoMethods/TodoItem'
import { TodoList } from './ToDoMethods/TodoList'
import { TodoSearch } from './ToDoMethods/TodoSearch'
import React from 'react'
import { useState } from 'react'


const defaultToDos = [
  {text: 'Terminar de estudiar React', Completed: false},
  {text: 'Almorzar saludable', Completed: false},
  {text: 'Bañarme rapido', Completed: false},
  {text: 'Descansar 30 minutos', Completed: true},
  {text: 'Dormirme temprano', Completed: true},

] 

function App() {
  const [todos, setTodos] = useState(defaultToDos)
  const [searchTerm, setSearchTerm] = useState('')


  const completedTodos = todos.filter(todo => (!!todo.Completed)).length
  const totatlTodos = todos.length
  const searchedTodos = todos.filter(
    (todo) => {

      const todoText = todo.text.toLowerCase()
      const todoSearch = searchTerm.toLowerCase()
      return (
        todoText.includes(todoSearch)
  )}
  )

  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    )
    newTodos[todoIndex].Completed = true
    setTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    )
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)
  }

  return (
    <React.Fragment>
        <TodoCounter Completed={completedTodos} Total={totatlTodos} />
        <TodoSearch searchTerm={ searchTerm } setSearchTerm = { setSearchTerm }/>
        <TodoList>
          {searchedTodos.map(ToDo => (
            <TodoItem 
            key={ToDo.text} 
            ToDos={ToDo.text} 
            completed={ToDo.Completed}
            onComplete = {() =>completeTodo(ToDo.text)}
            onDelete = {() =>deleteTodo(ToDo.text)}
            />
          ))}
        </TodoList>
        <CreateToDo />

    </React.Fragment>
  );
}

export default App
