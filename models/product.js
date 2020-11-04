module.exports = function(sequelize, DataTypes) {
    var Product = sequelize.define("Product", {
      name: DataTypes.STRING,
      username: DataTypes.STRING,
      description: DataTypes.STRING,
      likes: DataTypes.INTEGER,
      dislikes: DataTypes.INTEGER
    });
    return Product;
  };
  