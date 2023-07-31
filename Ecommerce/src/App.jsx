
import { Products } from "./Componets/Products"
import { products as initialProducts} from './mocks/Products.json'
import { Header } from "./Componets/Header"
import { Footer } from "./Componets/Footer"
import { IS_DEVELOPMENT } from "./config"
import { useFilters } from "./hooks/useFilters"



function App() {

  const {filterProducts} = useFilters()
  const filteredProducts = filterProducts(initialProducts)

  return (
    <>
    <Header /> 
    <Products products={filteredProducts}/>
    {IS_DEVELOPMENT && <Footer />}
    </>
    
  )
}

export default App
