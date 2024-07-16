'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pokemon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pokemon.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Name is required'
        },
        notNull: {
          args: true,
          msg: 'Name is required'
        }
      }
    },
    image: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Image is required'
        },
        notNull: {
          args: true,
          msg: 'Image is required'
        }
      }
    },
    UserId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: 'UserId is required'
        },
        notNull: {
          args: true,
          msg: 'UserId is required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Pokemon',
  });
  return Pokemon;
};