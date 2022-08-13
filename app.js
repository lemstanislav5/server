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
      init = require('./src/service/initialization');


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

init();