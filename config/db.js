const mysql = require('mysql');


const pool = mysql.createPool({
    connectionLimit: 10,  
    host: 'localhost', 
    user: 'api_user', 
    password: 'tc2005b',
    database: 'bdcurso'
  
}); 

pool.getConnection((err,connection)=> {
    if(err)
    throw err;
    console.log('Base de Datos Conectada Exitosamente');
    connection.release();
  });

  const querypromise = (sql) => {
    return new Promise((resolve, reject) => {
        pool.query(sql, (error, elements) => {
            if(error){
                return reject(error);
            }
            return resolve(elements);
        });
    });
}

module.exports = {
  querypromise, pool
};


