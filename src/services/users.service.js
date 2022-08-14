const query = require('./query'),
      checkUserSql = (login) => `SELECT * FROM users WHERE login = ${login}`,
      addUserSql = (login, password, hash, email_confirmation, ip, time) => 
      `INSERT INTO users (login, password, hash, email_confirmation, ip, time, jwt) 
      values (${login}, ${password}, ${hash}, ${email_confirmation}, ${ip}, ${time}`;
class UsersService {
  checkUser(login){
    return new Promise(query(checkUserSql(login)));
  } 
  createUsers(login, password, hash, email_confirmation, ip, time){
    return new Promise(query(addUserSql(login, password, hash, email_confirmation, ip, time)));
  };
}

module.exports = new UsersService();