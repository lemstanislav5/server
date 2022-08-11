"use strict"
const os = require('os').platform(),
      express = require('express'),
      app = express(),
      https = require('https'),
      fs = require('fs'),
      DOMAIN_NAME = 'chat-client.ga',
      DIR = (os == 'darwin')? '/.ssh_keys/': '/etc/letsencrypt/live/chat-client.ga/',
      PORT = (os == 'darwin')? 3000: 443,
      routes = require('./src/routes/index'),
      verificationFile = require('./src/verificationFile/index'),
      { host, user, password, database } = require('../config'),
      mysql = require("mysql");

let options = {
   key: fs.readFileSync(DIR + 'privkey.pem'),
   cert: fs.readFileSync(DIR + 'cert.pem'),
   ca: fs.readFileSync(DIR + 'chain.pem'),
}

const server = https
   .createServer(options, app)
   .listen(PORT, () => console.log(`Listening port: ${PORT}`))

app.use('/.well-known/acme-challenge', verificationFile)
app.use('/api', routes);


let connection = mysql.createConnection({host, user, password, database});

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
  passwoed varchar(255) not null
)`;

connection.query(sql, function(err, res) {
    if(err){
      console.log(err);
    } else if(res.warningCount === 0){
      console.log("Таблица создана впервые");
    } else if(res.warningCount === 1){
      console.log("Таблица уже существует");
    }
});
connection.end();
