const express = require('express'),
      router = express.Router();
      // UsersService = require('../services/users.service');
  // UserController = require('../controllers/users.controller'),

router
  .route('/')
  .post((req, res) => {
  if(!req.body) {
    return res.sendStatus(400);
  } else {
    console.log(req.body);
    return res.sendStatus(200);
  }
})

module.exports = router
