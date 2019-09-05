import Sequelize, { Model } from 'sequelize';

class DiarioGrade extends Model {
  static init(sequelize) {
    super.init(
      {
        escola: Sequelize.STRING,
        ano: Sequelize.STRING,
        seqano: Sequelize.STRING,
        turma: Sequelize.STRING,
        discip: Sequelize.STRING,
        materia: Sequelize.STRING,
        ava: Sequelize.STRING,
        datalimite: Sequelize.DATE,
        formula: Sequelize.INTEGER,
        prof: Sequelize.STRING,
        notamax: Sequelize.STRING,
        importada: Sequelize.STRING,
        obs: Sequelize.STRING,
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'diario_grade',
      }
    );

    return this;
  }

}

export default DiarioGrade;
