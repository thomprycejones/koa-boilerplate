"use strict"
const bcrypt = require("bcryptjs")

async function buildPasswordHash(instance) {
  if (instance.changed("password")) {
    const hash = await bcrypt.hash(instance.password, 10)
    instance.set("password", hash)
  }
}

module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define(
    "user",
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      classMethods: {
        associate: function(models) {
          models
          // associations can be defined here
        },
      },
    }
  )
  user.beforeUpdate(buildPasswordHash)
  user.beforeCreate(buildPasswordHash)
  user.prototype.checkPassword = function(password) {
    return bcrypt.compare(password, this.password)
  }
  return user
}
