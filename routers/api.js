const express = require('express');
const router = express.Router();

const { hello, whoami } = require('../controllers/api');


router.get('/hello', hello);

router.get('/whoami', whoami);


module.exports = router;