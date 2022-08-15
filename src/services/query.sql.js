const { host, user, password, database } = require('../../../config'),
      mysql = require("mysql2");
      
const query = async (sql, callback) => {
  let connection = mysql.createConnection({host, user, password, database }).promise();

  connection.connect((err) => {
    if (err) console.log("Ошибка: ", err);
    else console.log("Подключение к серверу MySQL успешно установлено", err);
  });
  
  connection.query(sql, callback)
    .then(result => {
      if(result[0].length === 0) {
        console.log('Можно делать INSERT ЗАПРОС!')
      }
    })
    .catch(err =>{
      if(err){
        console.log(err);
      } else if(res.warningCount === 0){
        console.log("Таблица создана впервые");
      } else if(res.warningCount === 1){
        console.log("Таблица уже существует");
      }
    });
    
  connection.end();
}
module.exports = query;