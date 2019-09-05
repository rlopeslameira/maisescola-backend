import Sequelize, { Model } from 'sequelize';

class RequerimentoWeb extends Model {
  static init(sequelize) {
    super.init(
      {
        escola: Sequelize.STRING,
        matric: Sequelize.STRING,
        codoco: Sequelize.STRING,
        datcon: Sequelize.STRING,
        datoco: Sequelize.STRING,
        linhis: Sequelize.STRING,
        linpro: Sequelize.STRING,
        curso: Sequelize.STRING,
        turma: Sequelize.STRING,
        lincon: Sequelize.STRING,
        sit: Sequelize.STRING,
        discip: Sequelize.STRING,
        importado: Sequelize.STRING,
        file: Sequelize.STRING,
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'reqweb'
      }
    );

    return this;
  }
}

export default RequerimentoWeb;
