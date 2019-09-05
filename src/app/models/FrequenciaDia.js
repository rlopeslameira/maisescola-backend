import Sequelize, { Model } from 'sequelize';

class FrequenciaDia extends Model {
  static init(sequelize) {
    super.init(
      {
        escola: Sequelize.STRING,
        ano: Sequelize.STRING,
        seqano: Sequelize.STRING,
        matric: Sequelize.STRING,
        data: Sequelize.DATE,
        hora: Sequelize.STRING,
        entrada: Sequelize.STRING,
        flg: Sequelize.STRING,
        mes: Sequelize.STRING,
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'frequencia_dia',
      }
    );

    return this;
  }

}

export default FrequenciaDia;
