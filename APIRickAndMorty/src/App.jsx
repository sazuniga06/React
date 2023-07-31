import React, { useState } from 'react';
export function App(){
    
      // Declara una nueva variable de estado, la cual llamaremos “count”
      const [count, setCount] = useState(0);
    
      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
      );

}