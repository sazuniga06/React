// Importación del archivo de estilos CSS para el componente TodoCounter
import './TodoCounter.css';

/* eslint-disable react/prop-types */
// Componente funcional TodoCounter que muestra la cantidad de tareas completadas y el total de tareas
export function TodoCounter({ Total, Completed }) {
    // Mensaje de texto a mostrar dependiendo de si todas las tareas están completadas o no
    const completedText =
        Total === Completed
            ? 'FELICIDADES COMPLETASTE TODAS LAS TAREAS!!!' // Si todas las tareas están completadas
            : `Haz completado ${Completed} de ${Total} ToDos`; // Si hay tareas pendientes

    // Comprueba si todas las tareas están completadas para agregar una clase CSS específica
    const isAllCompleted = Total === Completed;
    const counterClassName = `Todo-Counter ${isAllCompleted ? 'all-completed' : ''}`;

    // Retorna el componente con un elemento h1 que muestra el mensaje de texto
    return (
        <h1 className={counterClassName}>
            {/* Mostrar mensaje especial cuando no hay tareas */}
            {Completed === 0 && Total === 0 ? 'No tienes ninguna tarea pendiente' : completedText}
        </h1>
    );
}
