const { host, user, password, database } = require('../../../config'),
      mysql = require("mysql2");

const init = () => {
  let connection = mysql.createConnection({
    host, user, password, database
  }).promise();

  connection.connect((err) => {
    if (err) {
      console.log("Error occurred", err);
    } else {
      console.log("Success connection!");
    }
  });
  
  const sql = `create table if not exists users(
    id int primary key auto_increment,
    login varchar(255) not null,
    passwoed varchar(255) not null,
    domain varchar(255) not null,
    hash  varchar(255) not null,
    email_confirmation int(1),
    domain_confirmation int(1),
    ip varchar(255) not null,
    time varchar(255) not null,
    jwt varchar(255) not null
  )`;
  
  connection.query(sql)
      .then(result =>{
        console.log(result);
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
module.exports = init;