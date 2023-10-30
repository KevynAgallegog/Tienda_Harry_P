

import React, { useState, useEffect } from 'react';
import BookStore from './Components/BookStore/BookStore';
import mysql2 from 'mysql2';

import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Hacer una solicitud GET al servidor para obtener los datos
    fetch('./Components/server/server.js') // Asegúrate de que esta URL coincida con la ruta de tu servidor
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
  }, []); // La dependencia vacía [] asegura que esta solicitud se haga solo una vez al montar el componente.

  return (
    <div>
      <h1>Datos de la Base de Datos</h1>
      {error ? (
        <p>Error: {error.message}</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.titulo}</li>
            // Reemplaza "id" y "titulo" con los campos de tu tabla
          ))}
        </ul>
      )}
      <BookStore />
    </div>
  );
}

export default App;