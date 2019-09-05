import Sequelize, { Model } from 'sequelize';

class Log extends Model {
  static init(sequelize) {
    super.init(
      {
        escola: Sequelize.STRING,
        ano: Sequelize.STRING,
        seqano: Sequelize.STRING,
        operad: Sequelize.STRING,
        turma: Sequelize.STRING,
        discip: Sequelize.STRING,
        materia: Sequelize.STRING,
        ava: Sequelize.STRING,
        tarefa: Sequelize.STRING,
        data: Sequelize.DATE,
        hora: Sequelize.STRING,
        mes: Sequelize.INTEGER,
        obs: Sequelize.STRING,
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'log'
      }
    );

    return this;
  }
}

export default Log;
