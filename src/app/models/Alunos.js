import Sequelize, { Model } from 'sequelize';

class Alunos extends Model {
  static init(sequelize) {
    super.init(
      {
        escola: Sequelize.STRING(3),
        ano: Sequelize.STRING(4),
        seqano: Sequelize.STRING(1),
        matric: Sequelize.STRING(7),
        senha: Sequelize.STRING(20),
        nome: Sequelize.STRING(100),
        turma: Sequelize.STRING(6),
        turma_des: Sequelize.STRING(60),
        curso: Sequelize.STRING(10),
        curso_des: Sequelize.STRING(60),
        sit: Sequelize.STRING(15),
      },
      {
        sequelize,
        timestamps: false,
      }
    );

    return this;
  }

  checkPassword(senha) {
    return senha === this.senha;
  }
}

export default Alunos;
