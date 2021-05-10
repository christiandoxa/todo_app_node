const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('ACCOUNT', {
        ID_ACCOUNT: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        EMAIL: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        PASSWORD: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'ACCOUNT',
        timestamps: false,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    {name: "ID_ACCOUNT"},
                ]
            },
        ]
    });
};
