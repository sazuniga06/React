import "./CreateToDo.css"
export function CreateToDo (){

    const handleClick = () => {
        console.log("Click")
    }

    return (
        <button className='ButtonCreateToDo' onClick={handleClick}>
            +
        </button>
    )
  }
  