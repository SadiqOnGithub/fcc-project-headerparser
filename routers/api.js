const express = require('express');
const { hello, whoami } = require('../controllers/api');
const router = express.Router();




// your first API endpoint...
router.get('/hello', hello);

router.get('/whoami', whoami);

module.exports = router;