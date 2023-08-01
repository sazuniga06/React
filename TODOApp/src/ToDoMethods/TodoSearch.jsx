/* eslint-disable react/prop-types */
import "./TodoSearch.css"

export function TodoSearch ({searchTerm, setSearchTerm}){



    const handleChange  = (event) => {
        setSearchTerm(event.target.value)
    }
    
    return (
        <input className='TodoSearchTextBox' 
        type='textbox' 
        placeholder="Buscar Tarea"
        value = {searchTerm}
        onChange={handleChange  }/>
    )
  }