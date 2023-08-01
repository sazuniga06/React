import "./TodoCounter.css"

/* eslint-disable react/prop-types */
export function TodoCounter({ Total, Completed }){ 
    const completedText =
        Total === Completed
        ? 'FELICIDADES COMPLETASTE TODAS LAS TAREAS!!!'
        : `Haz completado ${Completed} de ${Total} ToDos`;

    const isAllCompleted = Total === Completed;
    const counterClassName = `Todo-Counter ${isAllCompleted ? 'all-completed' : ''}`;

    return (
        <h1 className={counterClassName}>
        {completedText}
        </h1>
    )
}
