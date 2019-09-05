import Sequelize, { Model } from 'sequelize';

class DiarioAvaliacoes extends Model {
  static init(sequelize) {
    super.init(
      {
        escola: Sequelize.STRING,
        ano: Sequelize.STRING,
        seqano: Sequelize.STRING,
        nava: Sequelize.STRING,
        ava: Sequelize.STRING,
        ativa: Sequelize.STRING,
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'diario_avaliacoes',
      }
    );

    return this;
  }

}

export default DiarioAvaliacoes;
