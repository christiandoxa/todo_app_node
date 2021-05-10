const {ACCOUNT} = require('../models');
const {
    password: {hashPassword, decryptPassword},
    jwt: {createToken}
} = require('../utils');

function commonErrorResponse(e, res) {
    return res.status(500).json({
        status: 500,
        message: e.toString()
    });
}

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
        return commonErrorResponse(e, res);
    }
};

exports.signIn = async function (req, res) {
    try {
        const {email, password} = req.body;
        if (!email || !password) {
            return res.status(400).json({
                status: 400,
                message: "all parameter is required"
            });
        }
        const account = await ACCOUNT.findOne({where: {EMAIL: email}});
        if (account) {
            if (decryptPassword(password, account.PASSWORD)) {
                const accessToken = createToken(account);
                return res.status(200).json({
                    status: 200,
                    accessToken,
                    account
                });
            }
            return res.status(401).json({
                status: 401,
                message: "Invalid password"
            });
        }
        return res.status(404).json({
            status: 404,
            message: "Can't find account with that email"
        });
    } catch (e) {
        return commonErrorResponse(e, res);
    }
};
