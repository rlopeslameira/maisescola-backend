import Sequelize, { Model } from 'sequelize';

class HistoricoDisciplina extends Model {
  static init(sequelize) {
    super.init(
      {
        escola: Sequelize.STRING,
        ano: Sequelize.STRING,
        seqhis: Sequelize.STRING,
        matric: Sequelize.STRING,
        discip: Sequelize.VERCHAR,
        med: Sequelize.STRING,
        falras: Sequelize.STRING,
        chr: Sequelize.STRING,
        status: Sequelize.STRING,
        credito: Sequelize.STRING,
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'historicodisciplina',
      }
    );

    return this;
  }

}

export default HistoricoDisciplina;
