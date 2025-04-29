import { DataTypes } from "sequelize";
import sequelize from "../config/database";
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: 'id'
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'nome'
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
  tableName: 'usuarios'
});
export default User;
