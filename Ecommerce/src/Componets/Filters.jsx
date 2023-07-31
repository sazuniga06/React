import {useId} from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters';

// eslint-disable-next-line react/prop-types
export function Filters() {

    const { filters, setFilters } = useFilters()
    const minPriceFilterId = useId()
    const CategoryFilterId = useId()// Rename 'setPrice' to 'setMinPrice'
  
    const handleChangeMinPrice = (event) => {
      setFilters(prevState => ({
        ...prevState,
        minPrice: event.target.value
      })) 
    }
  
    const handleChangeCategory = (event) => {
      setFilters(prevState => ({
        ...prevState,
        category: event.target.value
      }))
    }
  
    return (
      <section className="filters">
        <div>
          <label htmlFor='price'> Precio </label>
          <input
            type='range'
            id={minPriceFilterId}
            min='0'
            max='1000'
            value={filters.minPrice} // Add 'value' attribute to the input
            onChange={handleChangeMinPrice}
          />
          <span>${filters.minPrice}</span>
        </div>
        <div>
          <label htmlFor={CategoryFilterId}> Categoria </label>
          <select id={CategoryFilterId} onChange={handleChangeCategory}>
            <option value='all'> Todas </option>
            <option value='home-decoration'> Decoracion para el hogar </option>
            <option value='laptops'> Computadoras </option>
            <option value='smartphones'> Celulares </option>
            <option value='fragrances'> Perfumes </option>
            <option value='skincare'> Cuidado Facial </option>
            <option value='groceries'> Comestibles </option>
          </select>
        </div>
      </section>
    );
  }