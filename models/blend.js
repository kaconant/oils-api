'use strict';

module.exports = (sequelize, DataTypes) => {
  var Blend = sequelize.define('Blend', {
    name: DataTypes.STRING,
    baseOil: DataTypes.STRING,
    middleOil: DataTypes.STRING,
    topOil: DataTypes.STRING,
  }, {});

  Blend.associate = function(models) {
    // associations can be defined here
    Blend.belongsTo(models.User);
    // Blend.belongsToMany(models.Oil, {
    //   through: 'BlendUser'
    // });
  };
  return Blend;
};