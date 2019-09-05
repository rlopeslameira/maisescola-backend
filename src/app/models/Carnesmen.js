import Sequelize, { Model } from 'sequelize';

class Carnesmen extends Model {
  static init(sequelize) {
    super.init(
      {
        escola: Sequelize.STRING,
        ano: Sequelize.STRING,
        seqano: Sequelize.STRING,
        matric: Sequelize.STRING,
        parcel: Sequelize.INTEGER,
        men1: Sequelize.STRING,
        men2: Sequelize.STRING,
        men3: Sequelize.STRING,
        men4: Sequelize.STRING,
        mendes: Sequelize.STRING,
        menmul: Sequelize.STRING,
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'carnesmen',
      }
    );

    return this;
  }

}

export default Carnesmen;
