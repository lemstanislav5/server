const query = require('./query.sql'),
      checkUserSql = ({login}) => (`SELECT * FROM users WHERE login = '${login}'`),
      addUserSql = (login, password, hash, email_confirmation, ip, time) => 
      (`INSERT INTO users (login, password, hash, email_confirmation, ip, time, jwt) 
      values (${login}, ${password}, ${hash}, ${email_confirmation}, ${ip}, ${time}`);
      // universal = (arg, callback) => (new Promise(() => query(callback(arg)))) 
class UsersService {
  checkUser(arg){
    // return new Promise(() => query(checkUserSql(arg)));
    //!СДЕЛАТЬ УНИВЕРСАЛЬНУЮ ФУНКуциЮ ТИПА FN(arg, callback)
  }
  addUser(){

  } 
  createUsers(login, password, hash, email_confirmation, ip, time){
    return new Promise(query(addUserSql(login, password, hash, email_confirmation, ip, time)));
  };
}

module.exports = new UsersService();