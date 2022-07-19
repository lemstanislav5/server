const express     = require('express'),
      router      = express.Router(),
      usersRoutes = require('./users.routers')

router.use('/users', usersRoutes)
router.use('/users', usersRoutes)
module.exports = router
