const express = require('express');
const {account: {createAccount}} = require('../controllers');
const router = express.Router();

router.post('/create_account', createAccount);

module.exports = router;
