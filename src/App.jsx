

import React, { useState, useEffect } from 'react';
import BookStore from './Components/BookStore/BookStore';

import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
  
    fetch('./Components/server/server.js') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error de red');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error al obtener datos: ' + error);
        setError(error);
      });
  }, []); 

  return (
    <div>
      
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.titulo}</li>
            // Reemplaza "id" y "titulo" con los campos de tu tabla
          ))}
        </ul>
      
      <BookStore />
    </div>
  );
}

export default App;