const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

class User extends Model { }

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'data_de_criacao'
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'data_de_atualizacao'
  }
}, {
  sequelize,
  modelName: 'User',
  tableName: 'usuarios',
  timestamps: true
});

module.exports = User;