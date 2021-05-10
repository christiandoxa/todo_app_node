const express = require('express');
const {account: {createAccount, signIn}} = require('../controllers');
const router = express.Router();

router.post('/create_account', createAccount);
router.post('/sign_in', signIn);

module.exports = router;
