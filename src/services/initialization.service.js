const query = require("./query.sql"),
      sql = `create table if not exists users(
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
          )`,
      init = () => query(sql, null);

module.exports = init;