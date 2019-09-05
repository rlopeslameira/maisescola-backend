import Sequelize, { Model } from 'sequelize';

class DiarioFaltaMes extends Model {
  static init(sequelize) {
    super.init(
      {
        escola: Sequelize.STRING,
        ano: Sequelize.STRING,
        seqano: Sequelize.STRING,
        matric: Sequelize.STRING,
        turma: Sequelize.STRING,
        discip: Sequelize.STRING,
        materia: Sequelize.STRING,
        mes: Sequelize.INTEGER,
        faltas: Sequelize.INTEGER,
        importada: Sequelize.STRING,
        tipo: Sequelize.STRING,
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'diario_faltames',
      }
    );

    return this;
  }

}

export default DiarioFaltaMes;
