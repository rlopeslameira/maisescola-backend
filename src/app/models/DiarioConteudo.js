import Sequelize, { Model } from 'sequelize';

class DiarioConteudo extends Model {
  static init(sequelize) {
    super.init(
      {
        escola: Sequelize.STRING,
        ano: Sequelize.STRING,
        seqano: Sequelize.STRING,
        turma: Sequelize.STRING,
        discip: Sequelize.STRING,
        materia: Sequelize.STRING,
        data: Sequelize.DATE,
        qtdaulas: Sequelize.INTEGER,
        assunto: Sequelize.STRING,
        obs: Sequelize.STRING,
        importada: Sequelize.STRING,
        prof: Sequelize.STRING,
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'diario_conteudo',
      }
    );

    return this;
  }

}

export default DiarioConteudo;
