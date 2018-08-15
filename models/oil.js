'use strict';
module.exports = (sequelize, DataTypes) => {
  var Oil = sequelize.define('Oil', {
    name: DataTypes.STRING,
    desc: DataTypes.TEXT('long'),
    url: DataTypes.TEXT('long'),
    mood: DataTypes.STRING,
    level: DataTypes.STRING,
    pregnant: DataTypes.BOOLEAN,
    allergies: DataTypes.BOOLEAN,
    kid: DataTypes.BOOLEAN
  }, {});
  Oil.associate = function(models) {
    // associations can be defined here
    Oil.belongsToMany(models.Blend, {
      through: 'BlendOil'
    });
  };
  return Oil;
};