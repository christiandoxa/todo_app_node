const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.hashPassword = function (plainPassword) {
    return bcrypt.hashSync(plainPassword, saltRounds);
};

exports.decryptPassword = function (plainPassword, hashFromDB) {
    return bcrypt.compareSync(plainPassword, hashFromDB);
}
