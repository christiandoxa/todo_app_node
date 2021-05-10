const express = require('express');
const {
    account: {createAccount, signIn},
    note: {createNote, getAllNotes, getNote, updateNote}
} = require('../controllers');
const {jwtCheck: {checkToken}} = require('../middlewares');
const router = express.Router();

// account route
router.post('/create_account', createAccount);
router.post('/sign_in', signIn);


// note route
router.get('/notes', checkToken, getAllNotes);
router.get('/note/:id_note', checkToken, getNote);
router.post('/add_note', checkToken, createNote);
router.put('/note/:id_note', checkToken, updateNote);

module.exports = router;
