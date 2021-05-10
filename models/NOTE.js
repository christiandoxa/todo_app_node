const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('NOTE', {
        ID_NOTE: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        ID_ACCOUNT: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'ACCOUNT',
                key: 'ID_ACCOUNT'
            }
        },
        NOTE: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        CREATED_AT: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
        }
    }, {
        sequelize,
        tableName: 'NOTE',
        timestamps: false,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    {name: "ID_NOTE"},
                ]
            },
            {
                name: "NOTE_ACCOUNT",
                using: "BTREE",
                fields: [
                    {name: "ID_ACCOUNT"},
                ]
            },
        ]
    });
};
