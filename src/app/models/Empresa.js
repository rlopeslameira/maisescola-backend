import Sequelize, { Model } from 'sequelize';

class Empresa extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        endereco: Sequelize.STRING,
        fone1: Sequelize.STRING,
        fone2: Sequelize.STRING,
        cnpj: Sequelize.STRING,
        logo: Sequelize.STRING,
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'empresa',
      }
    );

    return this;
  }
}

export default Empresa;
