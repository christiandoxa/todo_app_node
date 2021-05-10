const express = require('express');
const {
    account: {createAccount, signIn},
    note: {createNote}
} = require('../controllers');
const {jwtCheck: {checkToken}} = require('../middlewares');
const router = express.Router();

router.post('/create_account', createAccount);
router.post('/sign_in', signIn);
router.post('/add_note', checkToken, createNote);

module.exports = router;
