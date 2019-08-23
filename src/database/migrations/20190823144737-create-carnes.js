'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('carnes', {
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
      parcel: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      despar: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      valmen: {
        type: Sequelize.STRING(11),
        allowNull: true,
      },
      datven: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },
      valadi: {
        type: Sequelize.STRING(11),
        allowNull: true,
      },
      datadi: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },
      valpag: {
        type: Sequelize.STRING(11),
        allowNull: true,
      },
      datpag: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },
      valdes: {
        type: Sequelize.STRING(11),
        allowNull: true,
      },
      valcor: {
        type: Sequelize.STRING(11),
        allowNull: true,
      },
      lindig: {
        type: Sequelize.STRING(60),
        allowNull: true,
      },
      codbar: {
        type: Sequelize.STRING(60),
        allowNull: true,
      },
      nosnum: {
        type: Sequelize.STRING(12),
        allowNull: true,
      },
      codbco: {
        type: Sequelize.STRING(4),
        allowNull: true,
      },
      seqbco: {
        type: Sequelize.STRING(2),
        allowNull: true,
      },
      codmen: {
        type: Sequelize.STRING(1),
        allowNull: true,
      },
      valcom1: {
        type: Sequelize.STRING(11),
        allowNull: true,
      },
      valcom2: {
        type: Sequelize.STRING(11),
        allowNull: true,
      },
      valcom3: {
        type: Sequelize.STRING(11),
        allowNull: true,
      },
      valded1: {
        type: Sequelize.STRING(11),
        allowNull: true,
      },
      valded2: {
        type: Sequelize.STRING(11),
        allowNull: true,
      },
      numdoc: {
        type: Sequelize.STRING(18),
        allowNull: true,
      },
      valmuljur: {
        type: Sequelize.STRING(11),
        allowNull: true,
      },
      lindigmob: {
        type: Sequelize.STRING(60),
        allowNull: true,
      },
      cwdatven: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },
      cwmulta: {
        type: Sequelize.STRING(11),
        allowNull: true,
      },
      cwjuros: {
        type: Sequelize.STRING(11),
        allowNull: true,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('carnes');
  }
};
