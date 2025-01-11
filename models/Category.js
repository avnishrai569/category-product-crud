module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
      CategoryId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      CategoryName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
    return Category;
  };
  