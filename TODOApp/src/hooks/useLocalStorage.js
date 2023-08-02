import { useEffect, useState } from "react";

// Hook personalizado para manejar el almacenamiento local
export function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
      // Intenta obtener el valor almacenado en el almacenamiento local para la clave 'itemName'
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem = JSON.parse(localStorageItem);

      if (localStorageItem) {
        setItem(parsedItem);
      } else {
        // Si no existe un valor almacenado, inicializa el almacenamiento local con 'initialValue'
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        setItem(initialValue);
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Función para guardar el nuevo valor de 'item' en el almacenamiento local
    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };
    
    // Retorna el estado 'item' y la función 'saveItem'
    return {
      item, 
      saveItem,
      loading,
      error
    };
}