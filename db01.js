import { createConnection } from 'mysql2';

const connection = createConnection({
  host: 'localhost',
  user: 'root',
  password: '19372846',
  database: 'db_user',
});


connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL!');
});

connection.query('SELECT * FROM tbl_user', (err, results) => {
  if (err) {
    console.error('Erro ao executar a consulta:', err);
    return;
  }
  console.log('Resultados da consulta:', results);
});

 connection.end();