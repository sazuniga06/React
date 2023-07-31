import { useState } from 'react'
import './Filters.css'

// eslint-disable-next-line react/prop-types
export function Filters({ onChange }) {

    const [minPrice, setMinPrice] = useState(0); // Rename 'setPrice' to 'setMinPrice'
  
    const handleChangeMinPrice = (event) => {
      setMinPrice(event.target.value); // Update 'setPrice' to 'setMinPrice'
      onChange(prevState => ({
        ...prevState,
        minPrice: event.target.value
      })) 
    }
  
    const handleChangeCategory = (event) => {
      onChange(prevState => ({
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
            id='price'
            min='0'
            max='1000'
            value={minPrice} // Add 'value' attribute to the input
            onChange={handleChangeMinPrice}
          />
          <span>${minPrice}</span>
        </div>
        <div>
          <label htmlFor="category"> Categoria </label>
          <select id='category' onChange={handleChangeCategory}>
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