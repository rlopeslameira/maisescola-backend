import Sequelize, { Model } from 'sequelize';

class FuncionarioTurma extends Model {
  static init(sequelize) {
    super.init(
      {
        escola: Sequelize.STRING,
        ano: Sequelize.STRING,
        seqano: Sequelize.STRING,
        matric: Sequelize.INTEGER,
        guerra: Sequelize.STRING,
        turma: Sequelize.STRING,
        flg: Sequelize.STRING,
        mes: Sequelize.STRING,
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'funtur',
      }
    );

    return this;
  }

}

export default FuncionarioTurma;
