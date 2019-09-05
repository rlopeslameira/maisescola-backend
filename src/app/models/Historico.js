import Sequelize, { Model } from 'sequelize';

class Historico extends Model {
  static init(sequelize) {
    super.init(
      {
        escola: Sequelize.STRING,
        ano: Sequelize.STRING,
        seqhis: Sequelize.STRING,
        matric: Sequelize.STRING,
        periodo: Sequelize.VERCHAR,
        chrtot: Sequelize.STRING,
        dialet: Sequelize.STRING,
        grau: Sequelize.STRING,
        serie: Sequelize.STRING,
        estabelecimento: Sequelize.STRING,
        loccal: Sequelize.STRING,
        sit: Sequelize.STRING,
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'historico',
      }
    );

    return this;
  }

}

export default Historico;
