import Sequelize, { Model } from 'sequelize';

class DiarioNotas extends Model {
  static init(sequelize) {
    super.init(
      {
        escola: Sequelize.STRING,
        ano: Sequelize.STRING,
        seqano: Sequelize.STRING,
        matric: Sequelize.STRING,
        ord: Sequelize.INTEGER,
        ia1: Sequelize.STRING,
        ia2: Sequelize.STRING,
        ia3: Sequelize.STRING,
        ia4: Sequelize.STRING,
        ia5: Sequelize.STRING,
        ia6: Sequelize.STRING,
        notas: Sequelize.STRING,
        faltas: Sequelize.INTEGER,
        cab1: Sequelize.STRING,
        cab2: Sequelize.STRING,
        cab3: Sequelize.STRING,
        cab4: Sequelize.STRING,
        cab5: Sequelize.STRING,
        cab6: Sequelize.STRING,
        ava: Sequelize.STRING,
        turma: Sequelize.STRING,
        discip: Sequelize.STRING,
        materia: Sequelize.STRING,
        nava: Sequelize.STRING,
        subs1: Sequelize.DATE,
        subs2: Sequelize.INTEGER,
        tipo: Sequelize.STRING,
        importada: Sequelize.STRING,
        trasnferido: Sequelize.STRING,
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'diario_notas',
      }
    );

    return this;
  }

}

export default DiarioNotas;
