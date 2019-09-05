import Sequelize, { Model } from 'sequelize';

class Turmas extends Model {
  static init(sequelize) {
    super.init(
      {
        escola: Sequelize.STRING,
        ano: Sequelize.STRING,
        seqano: Sequelize.STRING,
        turma: Sequelize.STRING,
        destur: Sequelize.STRING,
        codcur: Sequelize.STRING,
        serie: Sequelize.STRING,
        tiplan: Sequelize.STRING,
        coord: Sequelize.STRING,
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'turma'
      }
    );

    return this;
  }
}

export default Turmas;
