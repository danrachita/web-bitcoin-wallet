var express = require('express');
var router = express.Router();
const login = require('./login');
const send = require('./send');

router.use(login);
router.use(send);

module.exports = router;
