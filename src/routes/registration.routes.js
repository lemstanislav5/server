const express = require('express'),
      router = express.Router();
      UsersService = require('../services/users.service');
  // UserController = require('../controllers/users.controller'),

router
  .route('/')
  .post((req, res) => {
    let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress; 
    let time = new Date().getTime();
    console.log(ip.split(':')[3]);
    if(!req.body) {
      return res.sendStatus(400);
    } else {
      UsersService.checkUser({login: req.body.login})
        .then(res=> {
          // console.log(res);
        })
        .catch(err=>{
          // consple.log(err);
        })
      // console.log(req.body);
      return res.sendStatus(200);
    }
})

module.exports = router
