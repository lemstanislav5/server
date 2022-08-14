"use strict"
const os = require('os').platform(),
      express = require('express'),
      app = express(),
      https = require('https'),
      fs = require('fs'),
      DOMAIN_NAME = 'chat-client.ga',
      DIR = (os == 'darwin')? '../ssh_keys/': '/etc/letsencrypt/live/chat-client.ga/',
      PORT = (os == 'darwin')? 3000: 443,
      routes = require('./src/routes/index'),
      verificationFile = require('./src/verificationFile/index'),
      init = require('./src/services/initialization.service');


let options = {
   key: fs.readFileSync(DIR + 'privkey.pem'),
   cert: fs.readFileSync(DIR + 'cert.pem'),
   ca: fs.readFileSync(DIR + 'chain.pem'),
}

const server = https
   .createServer(options, app)
   .listen(PORT, () => console.log(`Listening port: ${PORT}`))
   app.use((req, res, next) => {
      // Website you wish to allow to connect
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
      // Request methods you wish to allow
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      // Request headers you wish to allow
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      // Set to true if you need the website to include cookies in the requests sent
      // to the API (e.g. in case you use sessions)
      res.setHeader('Access-Control-Allow-Credentials', true);
      // Pass to next layer of middleware
      next();
  });
app.use('/.well-known/acme-challenge', verificationFile);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', routes);
init();