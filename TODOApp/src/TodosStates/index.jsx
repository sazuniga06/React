import "./TodosStates.css"
import { AiOutlineLoading3Quarters } from "react-icons/ai";


export function TodosLoading() {
    return (
        <p className="todos-loading"><AiOutlineLoading3Quarters/></p>
    )
}

export function TodosError() {
    return (
        <p className="todos-error">¡¡¡Error fatal, Abortar la misión!!!</p>
    )
}

export function TodosCreate() {
    return (
        <p className="todos-create">Crea un nuevo ToDo</p>
    )
}