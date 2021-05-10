const jwt = require('jsonwebtoken');
const secretKey = 'ini_adalah_secret';

exports.createToken = function (payload) {
    return jwt.sign(payload.toJSON(), secretKey);
};

exports.parseToken = function (token) {
    return jwt.verify(token, secretKey);
};
