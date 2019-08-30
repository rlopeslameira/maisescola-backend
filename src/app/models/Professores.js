import Sequelize, { Model } from 'sequelize';

class Professores extends Model {
  static init(sequelize) {
    super.init(
      {
        matric: Sequelize.STRING(7),
        guerra: Sequelize.STRING(20),
        nome: Sequelize.STRING(40),
        senha: Sequelize.STRING(20),
        tipo: Sequelize.STRING(6),
        email: Sequelize.STRING(80),
        setor: Sequelize.STRING(30),
      },
      {
        sequelize,
        timestamps: false,
        underscored: true,
        tableName: 'profes',
      }
    );

    return this;
  }

  checkPassword(senha) {
    return senha === this.senha;
  }
}

export default Professores;
