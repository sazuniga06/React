import './App.css'
import { useFetch } from './useFetch'

function App() 
{
  const {data, loading} = useFetch("https://jsonplaceholder.typicode.com/users")

  return(
    <div className="App">
      <h1> Probando API </h1>
      <div className = "card">
        <ul>
          {loading && <li>Cargando ...</li>}
          {data?.map((user) => (<li key = {user.id}>{user.name}</li>))}
        </ul>
      </div>
    </div> 
  )
}

export default App
