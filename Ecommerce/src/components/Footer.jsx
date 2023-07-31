//import { useFilters } from '../hooks/useFilters'
import './Footer.css'

// eslint-disable-next-line react/prop-types, no-unused-vars
export function Footer () {
  // const { filters } = useFilters()

  return (
    <footer className='footer'>
      {
        //<h4>{JSON.stringify(filters, null, 2)}</h4>
      }
      <h4>Prueba técnica de React ⚛️ － <span>@sazuniga6</span></h4>
      <h5>Shopping Cart con useContext & useReducer</h5>
    </footer>
  )
}