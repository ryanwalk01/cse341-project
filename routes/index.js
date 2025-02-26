const { requiresAuth } = require('express-openid-connect');

const router = require('express').Router();

router.use('/api-docs', require('./swagger'));
router.use(requiresAuth());

router.use('/towers', require('./towers'));

router.use('/shrines', require('./shrines'));



module.exports = router;
