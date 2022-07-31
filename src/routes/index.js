const express     = require('express'),
      router      = express.Router(),
      authRoutes = require('./auth.routers')

router.use('/auth', authRoutes)
module.exports = router
