const express     = require('express'),
      router      = express.Router(),
      authRoutes = require('./auth.routes')
      registrationRoutes = require('./registration.routes')

router.use('/registration', authRoutes)
module.exports = router
