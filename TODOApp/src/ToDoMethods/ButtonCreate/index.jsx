// Importación del archivo de estilos CSS para el componente CreateToDo
import "./CreateToDo.css";

// Definición del componente funcional CreateToDo
export function CreateToDo() {
    // Función que se ejecuta cuando se hace clic en el botón
    const handleClick = () => {
        console.log("Click"); // Imprime "Click" en la consola
    };

    // Retorno del componente con un botón que muestra un símbolo "+" y tiene una clase CSS "ButtonCreateToDo"
    return (
        <button className='ButtonCreateToDo' onClick={handleClick}>
            +
        </button>
    );
}
