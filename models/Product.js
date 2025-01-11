module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
      ProductId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      ProductName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      CategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
    Product.associate = (models) => {
      Product.belongsTo(models.Category, { foreignKey: 'CategoryId' });
    };
    return Product;
  };
  