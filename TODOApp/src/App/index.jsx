// Importaciones de estilos y componentes
import { TodoProvider } from '../context';
import './App.css';

import { AppUI } from './AppUI';



// Componente principal de la aplicación
function App() {


  return (
    <TodoProvider>
      <AppUI /> 
    </TodoProvider>
  );

}

export default App;
