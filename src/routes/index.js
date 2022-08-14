const express     = require('express'),
      router      = express.Router(),
      loginRoutes = require('./login.routes'),
      registrationRoutes = require('./registration.routes');

router.use('/login', loginRoutes)
router.use('/registration', registrationRoutes)
module.exports = router
