import Sequelize, { Model } from 'sequelize';

class Bancos extends Model {
  static init(sequelize) {
    super.init(
      {
        escola: Sequelize.STRING,
        seqbco: Sequelize.STRING,
        codbco: Sequelize.STRING,
        cartei: Sequelize.STRING,
        ageced: Sequelize.STRING,
        locpag: Sequelize.STRING,
        mencomdes1: Sequelize.STRING,
        mencomdes2: Sequelize.STRING,
        mencomdes3: Sequelize.STRING,
        mencomdes4: Sequelize.STRING,
        mensemdes1: Sequelize.STRING,
        mensemdes2: Sequelize.STRING,
        mensemdes3: Sequelize.STRING,
        mensemdes4: Sequelize.STRING,
        mensemded1: Sequelize.STRING,
        mensemded2: Sequelize.STRING,
        mensemded3: Sequelize.STRING,
        mensemded4: Sequelize.STRING,
        nomcec: Sequelize.STRING,
        cnpj: Sequelize.STRING,
        gerbol: Sequelize.STRING,
      },
      {
        sequelize,
        timestamps: false,
      }
    );

    return this;
  }

}

export default Bancos;
