import Sequelize, { Model } from 'sequelize';

class Carnes extends Model {
  static init(sequelize) {
    super.init(
      {
        escola: Sequelize.STRING(3),
        ano: Sequelize.STRING(4),
        seqano: Sequelize.STRING(1),
        matric: Sequelize.STRING(7),
        parcel: Sequelize.INTEGER,
        despar: Sequelize.STRING(20),
        valmen: Sequelize.STRING(11),
        datven: Sequelize.STRING(10),
        valadi: Sequelize.STRING(11),
        datadi: Sequelize.STRING(10),
        valpag: Sequelize.STRING(11),
        datpag: Sequelize.STRING(10),
        valdes: Sequelize.STRING(11),
        valcor: Sequelize.STRING(11),
        lindig: Sequelize.STRING(60),
        codbar: Sequelize.STRING(60),
        nosnum: Sequelize.STRING(12),
        codbco: Sequelize.STRING(4),
        seqbco: Sequelize.STRING(2),
        codmen: Sequelize.STRING(1),
        valcom1: Sequelize.STRING(11),
        valcom2: Sequelize.STRING(11),
        valcom3: Sequelize.STRING(11),
        valded1: Sequelize.STRING(11),
        valded2: Sequelize.STRING(11),
        numdoc: Sequelize.STRING(18),
        valmuljur: Sequelize.STRING(11),
        lindigmob: Sequelize.STRING(60),
        cwdatven: Sequelize.STRING(10),
        cwmulta: Sequelize.STRING(11),
        cwjuros: Sequelize.STRING(11),
      },
      {
        sequelize,
        timestamps: false,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Alunos, { foreignKey: 'matric', as: 'alunos' });
  }

}

export default Carnes;
