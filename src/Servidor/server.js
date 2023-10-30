import express from 'express';
import mysql from 'mysql2'; 

const app = express();
const port = 1080;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1091205488Kg',
  database: 'Tienda_HP',
});

connection.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos: ' + err.stack);
    return;
  }
  console.log('Conexión a la base de datos exitosa');
});

app.get('/api/datos', (req, res) => {
  const sql = 'SELECT * FROM Libros'; 
  connection.query(sql, (err, results) => { 
    if (err) {
      console.error('Error al obtener datos: ' + err.message);
      res.status(500).json({ error: 'Error al obtener datos' });
      return;
    }
    res.json(results); 
  });
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`); 
});
