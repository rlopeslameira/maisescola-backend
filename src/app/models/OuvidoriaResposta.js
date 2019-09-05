import Sequelize, { Model } from 'sequelize';

class OuvidoriaResposta extends Model {
  static init(sequelize) {
    super.init(
      {
        id_ouvidoria: Sequelize.INTEGER,
        resposta: Sequelize.STRING,
        quem: Sequelize.STRING,
        data: Sequelize.DATE,
        hora: Sequelize.STRING,
        matric_fun: Sequelize.INTEGER,
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'ouvidoria'
      }
    );

    return this;
  }
}

export default OuvidoriaResposta;
