import Sequelize, { Model } from 'sequelize';

class Localizacao extends Model {
  static init(sequelize) {
    super.init(
      {
        device: Sequelize.STRING,
        alunos: Sequelize.STRING,
        distancia: Sequelize.STRING,
        data: Sequelize.DATE,
        ativo: Sequelize.INTEGER,
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'localizacao'
      }
    );

    return this;
  }
}

export default Localizacao;
