import Sequelize, { Model } from 'sequelize';

class Ouvidoria extends Model {
  static init(sequelize) {
    super.init(
      {
        protocolo: Sequelize.STRING,
        matric: Sequelize.STRING,
        tipo: Sequelize.INTEGER,
        assunto: Sequelize.STRING,
        detalhes: Sequelize.STRING,
        situacao: Sequelize.INTEGER,
        data: Sequelize.DATE,
        hora: Sequelize.STRING,
        grau_satisfacao: Sequelize.INTEGER,
        comentario_satisfacao: Sequelize.STRING,
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

export default Ouvidoria;
