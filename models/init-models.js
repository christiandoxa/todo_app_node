var DataTypes = require("sequelize").DataTypes;
var _ACCOUNT = require("./ACCOUNT");
var _NOTE = require("./NOTE");

function initModels(sequelize) {
    var ACCOUNT = _ACCOUNT(sequelize, DataTypes);
    var NOTE = _NOTE(sequelize, DataTypes);

    NOTE.belongsTo(ACCOUNT, {as: "ID_ACCOUNT_ACCOUNT", foreignKey: "ID_ACCOUNT"});
    ACCOUNT.hasMany(NOTE, {as: "NOTEs", foreignKey: "ID_ACCOUNT"});

    return {
        ACCOUNT,
        NOTE,
    };
}

module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
