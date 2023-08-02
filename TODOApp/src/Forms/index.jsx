// Importa los hooks "useContext" y "useState" desde React
import { useContext, useState } from "react";

// Importa los estilos del formulario desde el archivo "Forms.css"
import "./Forms.css";

// Importa el contexto "TodoContext" desde el archivo "../context"
import { TodoContext } from "../context";

// Define el componente TodoForm
export function TodoForm() {
    // Estado local para almacenar el nuevo ToDo ingresado en el formulario
    const [newTodo, setNewTodo] = useState('');

    // Obtiene las funciones "setOpenModal" y "addTodo" del contexto "TodoContext"
    const {
        setOpenModal,
        addTodo
    } = useContext(TodoContext);

    // Función que se ejecuta cuando se envía el formulario
    const onSubmit = (event) => {
        event.preventDefault();
        // Agrega el nuevo ToDo a la lista de tareas usando la función "addTodo" del contexto
        addTodo(newTodo);
        // Cierra el modal estableciendo "setOpenModal" a "false"
        setOpenModal(false);
    };

    // Función que se ejecuta cuando se presiona el botón de cancelar
    const onCancel = () => {
        // Cierra el modal estableciendo "setOpenModal" a "false"
        setOpenModal(false);
    };

    // Función que se ejecuta cuando se cambia el contenido del textarea del formulario
    const onChange = (event) => {
        // Actualiza el estado "newTodo" con el valor ingresado por el usuario
        setNewTodo(event.target.value);
    };

    // Devuelve el formulario para agregar un nuevo ToDo
    return (
        <form className="Form-ToDo" onSubmit={onSubmit}>
            <label className="Form-ToDo__Label">Nueva ToDo</label>
            <textarea
                className="Form-ToDo__Textarea"
                placeholder="Ingresa un ToDo"
                value={newTodo}
                onChange={onChange}
            />
            <div className="Form-ToDo__ButtonContainer">
                <button type='submit' className="Form-ToDo__AddTodoButton">Agregar</button>
                <button type="button" className="Form-ToDo__CancelButton" onClick={onCancel}>Cancelar</button>
            </div>
        </form>
    );
}
