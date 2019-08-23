'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('alunos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      escola: {
        type: Sequelize.STRING(3),
        allowNull: true,
      },
      ano: {
        type: Sequelize.STRING(4),
        allowNull: true,
      },
      seqano: {
        type: Sequelize.STRING(1),
        allowNull: true,
      },
      matric: {
        type: Sequelize.STRING(7),
        allowNull: true,
      },
      senha: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      nome: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      turma: {
        type: Sequelize.STRING(6),
        allowNull: true,
      },
      turma_des: {
        type: Sequelize.STRING(60),
        allowNull: true,
      },
      curso: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },
      curso_des: {
        type: Sequelize.STRING(60),
        allowNull: true,
      },
      sit: {
        type: Sequelize.STRING(15),
        allowNull: true,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('alunos');
  }
};
