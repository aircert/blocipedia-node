'use strict';
module.exports = (sequelize, DataTypes) => {
  var Wiki = sequelize.define('Wiki', {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    private: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER
  }, {});
  Wiki.associate = function(models) {
    // associations can be defined here
    Wiki.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE",
    });
  };
  return Wiki;
};