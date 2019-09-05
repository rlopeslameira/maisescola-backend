import Sequelize, { Model } from 'sequelize';

class Codoco extends Model {
  static init(sequelize) {
    super.init(
      {
        escola: Sequelize.STRING,
        codoco: Sequelize.STRING,
        desoco: Sequelize.STRING,
        praate: Sequelize.STRING,
        conta: Sequelize.STRING,
        valor: Sequelize.STRING,
        predis: Sequelize.INTEGER,
        prefile: Sequelize.INTEGER,
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'codoco',
      }
    );

    return this;
  }

}

export default Codoco;
