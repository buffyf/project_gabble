'use strict';
module.exports = function (sequelize, DataTypes) {
  var post = sequelize.define('post', {
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
  }, {
    });
  post.associate = function (models) {
    post.belongsTo(models.user, { as: 'user', foreignKey: 'userId' });
    post.hasMany(models.like, { as: 'like', foreignKey: 'postId' })
  };
  return post;
};