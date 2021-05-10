const {ACCOUNT} = require('../models');
const {password: {hashPassword}} = require('../utils');

exports.createAccount = async function (req, res) {
    try {
        const {email, password} = req.body;
        if (!email || !password) {
            return res.status(400).json({
                status: 400,
                message: "all parameter is required"
            });
        }
        const hashedPassword = hashPassword(password);
        const createdAccount = await ACCOUNT.create({
            EMAIL: email,
            PASSWORD: hashedPassword
        });
        return res.status(200).json({
            status: 200,
            account: createdAccount
        });
    } catch (e) {
        return res.status(500).json({
            status: 500,
            message: e.toString()
        })
    }
};
