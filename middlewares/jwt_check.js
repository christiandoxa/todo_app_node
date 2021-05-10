const {jwt: {parseToken}} = require('../utils');

exports.checkToken = function (req, res, next) {
    try {
        const {authorization} = req.headers;
        if (!authorization) {
            return res.status(401).json({
                status: 401,
                message: "Unauthorized, token is missing"
            });
        }
        req.user = parseToken(authorization.split(' ')[1]);
        next();
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.toString()
        });
    }
};
