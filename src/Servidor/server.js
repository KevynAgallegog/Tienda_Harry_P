import express from 'express';
import mysql from 'mysql2'; 

const app = express();
const port = 3306;

const connection = mysql.createConnection({
  host: 'bm4ktuxkievvpkg4ulch-mysql.services.clever-cloud.com',
  user: 'ua6mbmlzqt3z2jvw',
  password: 'x0jMhUD6uTxDW2eAupOD',
  database: 'bm4ktuxkievvpkg4ulch',
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
