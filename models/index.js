const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_URL, {
  dialect: 'mysql', // Change to 'postgres' if using PostgreSQL
  logging: false,
});

module.exports = sequelize;

const Category = require('./Category')(sequelize, DataTypes);
const Product = require('./Product')(sequelize, DataTypes);

Product.associate({ Category });

sequelize.sync();

module.exports = { sequelize, Category, Product };
