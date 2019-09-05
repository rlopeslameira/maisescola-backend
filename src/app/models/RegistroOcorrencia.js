import Sequelize, { Model } from 'sequelize';

class RegistroOcorrencia extends Model {
  static init(sequelize) {
    super.init(
      {
        escola: Sequelize.STRING,
        matric: Sequelize.STRING,
        codoco: Sequelize.STRING,
        nregoco: Sequelize.STRING,
        datcon: Sequelize.STRING,
        datoco: Sequelize.STRING,
        linhis: Sequelize.STRING,
        linpro: Sequelize.STRING,
        lincon: Sequelize.STRING,
        sit: Sequelize.STRING,
        discip: Sequelize.STRING,
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'regoco'
      }
    );

    return this;
  }
}

export default RegistroOcorrencia;
