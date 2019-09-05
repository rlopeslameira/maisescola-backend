import Sequelize, { Model } from 'sequelize';

class Pessoas extends Model {
  static init(sequelize) {
    super.init(
      {
        escola: Sequelize.STRING,
        matric: Sequelize.STRING,
        senha: Sequelize.STRING,
        nome: Sequelize.STRING,
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'pessoa'
      }
    );

    return this;
  }
}

export default Pessoas;
