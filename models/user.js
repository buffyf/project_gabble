'use strict';
module.exports = function (sequelize, DataTypes) {
  var user = sequelize.define('user', {

    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  },
    {}
  );


  user.associate = function (models) {
    user.hasMany(models.post, { as: 'posts', foreignKey: 'userId' })
    user.hasMany(models.like, { as: 'likes', foreignKey: 'userId' })

  };
  return user;
};

