module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        password: DataTypes.STRING,
    });
    return User;
};
