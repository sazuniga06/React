/* eslint-disable react/prop-types */
import { AddToCartIcon}  from './icons.jsx'
import './Products.css'

// eslint-disable-next-line react/prop-types
export function Products({ products }) {
    return (
      <main className="products">
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> -${product.price}
              </div>
              <div>
                <button>
                  <AddToCartIcon />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    );
  }