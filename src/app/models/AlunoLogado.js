import Sequelize, { Model } from 'sequelize';

class AlunoLogado extends Model {
  static init(sequelize) {
    super.init(
      {
        escola: Sequelize.STRING,
        ano: Sequelize.STRING,
        seqano: Sequelize.STRING,
        matric: Sequelize.STRING,
        data: Sequelize.DATE,
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'alunologado'
      }
    );

    return this;
  }
}

export default AlunoLogado;
