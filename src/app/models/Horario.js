import Sequelize, { Model } from 'sequelize';

class Horario extends Model {
  static init(sequelize) {
    super.init(
      {
        escola: Sequelize.STRING,
        ano: Sequelize.STRING,
        seqano: Sequelize.STRING,
        turma: Sequelize.STRING,
        entrada: Sequelize.STRING,
        tolerancia: Sequelize.STRING,
        diasemana: Sequelize.STRING,
        horaentrada: Sequelize.STRING,
        horasaida: Sequelize.STRING,
        aula1: Sequelize.STRING,
        aula2: Sequelize.STRING,
        aula3: Sequelize.STRING,
        aula4: Sequelize.STRING,
        aula5: Sequelize.STRING,
        aula6: Sequelize.STRING,
        aula7: Sequelize.STRING,
        aula8: Sequelize.STRING,
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'horario'
      }
    );

    return this;
  }
}

export default Horario;
