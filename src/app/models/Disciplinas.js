import Sequelize, { Model } from 'sequelize';

class Disciplinas extends Model {
  static init(sequelize) {
    super.init(
      {
        escola: Sequelize.STRING,
        coddis: Sequelize.STRING,
        tipo: Sequelize.INTEGER,
        desdis: Sequelize.STRING,
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'disciplina',
      }
    );

    return this;
  }

}

export default Disciplinas;
