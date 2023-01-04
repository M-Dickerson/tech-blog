const router = require('express').Router();
const secondRoutes = require('./second-routes');


router.use('/homepage', secondRoutes);

module.exports = router;