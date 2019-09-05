import Sequelize, { Model } from 'sequelize';

class Boletim extends Model {
  static init(sequelize) {
    super.init(
      {
        escola: Sequelize.STRING,
        ano: Sequelize.STRING,
        seqano: Sequelize.STRING,
        matric: Sequelize.STRING,
        discip: Sequelize.STRING,
        col1: Sequelize.STRING,
        col2: Sequelize.STRING,
        col3: Sequelize.STRING,
        col4: Sequelize.STRING,
        col5: Sequelize.STRING,
        col6: Sequelize.STRING,
        col7: Sequelize.STRING,
        col8: Sequelize.STRING,
        col9: Sequelize.STRING,
        col10: Sequelize.STRING,
        col11: Sequelize.STRING,
        col12: Sequelize.STRING,
        falta1: Sequelize.STRING,
        falta2: Sequelize.STRING,
        falta3: Sequelize.STRING,
        falta4: Sequelize.STRING,
        falta5: Sequelize.STRING,
        falta6: Sequelize.STRING,
        falta7: Sequelize.STRING,
        falta8: Sequelize.STRING,
        falta9: Sequelize.STRING,
        falta10: Sequelize.STRING,
        falta11: Sequelize.STRING,
        falta12: Sequelize.STRING,
        orddis: Sequelize.STRING,
        coddis: Sequelize.STRING,
        turma: Sequelize.STRING,
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'boletim'
      }
    );

    return this;
  }
}

export default Boletim;
