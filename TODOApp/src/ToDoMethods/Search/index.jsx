/* eslint-disable react/prop-types */
// Importación del archivo de estilos CSS para el componente TodoSearch
import "./TodoSearch.css";

// Componente funcional TodoSearch que representa el cuadro de búsqueda de tareas
// searchTerm: El término de búsqueda actual que se mostrará en el cuadro de texto.
// setSearchTerm: Función para actualizar el término de búsqueda en el estado del componente padre.
export function TodoSearch({ searchTerm, setSearchTerm }) {
    // Manejador de cambio para el cuadro de búsqueda
    const handleChange = (event) => {
        // Actualiza el término de búsqueda en el estado usando la función setSearchTerm
        setSearchTerm(event.target.value);
    };

    // El componente muestra un elemento <input> con la clase CSS "TodoSearchTextBox".
    // El valor del cuadro de texto es controlado por el estado searchTerm.
    // Cada vez que se escriba en el cuadro de texto, el evento onChange llama al handleChange para actualizar el término de búsqueda en el estado.
    return (
        <input
            className="TodoSearchTextBox"
            type="text" // Especificamos el tipo de entrada como texto
            placeholder="Buscar Tarea" // Texto de marcador de posición
            value={searchTerm} // Valor del cuadro de texto controlado por el estado searchTerm
            onChange={handleChange} // Evento onChange para actualizar el término de búsqueda
        />
    );
}
