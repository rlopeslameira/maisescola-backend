import Sequelize, { Model } from 'sequelize';

class DiarioDatLimFre extends Model {
  static init(sequelize) {
    super.init(
      {
        escola: Sequelize.STRING,
        ano: Sequelize.STRING,
        seqano: Sequelize.STRING,
        dat01: Sequelize.STRING,
        dat02: Sequelize.STRING,
        dat03: Sequelize.STRING,
        dat04: Sequelize.STRING,
        dat05: Sequelize.STRING,
        dat06: Sequelize.STRING,
        dat07: Sequelize.STRING,
        dat08: Sequelize.STRING,
        dat09: Sequelize.STRING,
        dat10: Sequelize.STRING,
        dat11: Sequelize.STRING,
        dat12: Sequelize.STRING,

      },
      {
        sequelize,
        timestamps: false,
        tableName: 'diario_datlimfre',
      }
    );

    return this;
  }

}

export default DiarioDatLimFre;
