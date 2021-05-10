const {Sequelize} = require("sequelize");
const initModels = require("./init-models");
const config = require('./config.json');
const options = config.options;
options.host = process.env.DB_IP ?? options.host;
const sequelize = new Sequelize(
    config.database,
    config.username,
    process.env.DB_PASSWORD ?? config.password,
    options
);

module.exports = initModels(sequelize);
