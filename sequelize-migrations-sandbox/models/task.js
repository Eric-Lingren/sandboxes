'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
      * Helper method for defining associations.
      * This method is not a part of Sequelize lifecycle.
      * The `models/index` file will call this method automatically.
    */
    static associate(models) {
      // define association here
      models.Task.belongsTo(models.User );
      models.Task.hasOne(models.User, {foreignKey: "id", targetKey: "userId"})
    }
  }

  Task.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    isComplete: DataTypes.BOOLEAN,
    userId: DataTypes.UUID
  }, 
  {
    sequelize,
    modelName: "Task",
  })

  return Task;
};