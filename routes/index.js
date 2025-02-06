const router = require('express').Router();

router.use('/towers', require('./towers'));

router.use('/shrines', require('./shrines'));

router.use('/api-docs', require('./swagger'));

module.exports = router;
