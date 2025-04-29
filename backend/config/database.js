const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:Guilherme100!@localhost:5432/crud_fullstack', {
  dialect: 'postgres',
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'data_de_criacao',
    updatedAt: 'data_de_atualizacao'
  }
});

module.exports = sequelize;