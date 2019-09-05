import Sequelize, { Model } from 'sequelize';

class DiarioFaltaDia extends Model {
  static init(sequelize) {
    super.init(
      {
        escola: Sequelize.STRING,
        ano: Sequelize.STRING,
        seqano: Sequelize.STRING,
        matric: Sequelize.STRING,
        data: Sequelize.DATE,
        freq: Sequelize.INTEGER,
        turma: Sequelize.STRING,
        discip: Sequelize.STRING,
        materia: Sequelize.STRING,
        qtdaulas: Sequelize.INTEGER,
        importada: Sequelize.STRING,
        tipo: Sequelize.STRING,
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'diario_faltadia',
      }
    );

    return this;
  }

}

export default DiarioFaltaDia;
