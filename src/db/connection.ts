import mysql from 'mysql2/promise';


  const poolConnection = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '19372846',
    database: 'db_user',
    waitForConnections: true, // Espera por conexões
    connectionLimit: 10, // Limite de conexões simultâneas
    queueLimit: 0, // Sem limite de fila
    maxIdle: 10000, // Tempo máximo de inatividade em milissegundos

    multipleStatements: true // Permite múltiplas instruções
  });

export default poolConnection;