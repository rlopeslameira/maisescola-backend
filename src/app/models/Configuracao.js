import Sequelize, { Model } from 'sequelize';

class Configuracao extends Model {
  static init(sequelize) {
    super.init(
      {
        escola: Sequelize.STRING,
        data_atualizacao: Sequelize.STRING,
        hora_atualizacao: Sequelize.STRING,
        versao: Sequelize.STRING,
        latitude: Sequelize.STRING,
        longitude: Sequelize.STRING,
        alunodebito: Sequelize.INTEGER,
        vercodbardeb: Sequelize.INTEGER,
        mbol: Sequelize.INTEGER,
        mfre: Sequelize.INTEGER,
        mfin: Sequelize.INTEGER,
        matv: Sequelize.INTEGER,
        moco: Sequelize.INTEGER,
        mreq: Sequelize.INTEGER,
        mhis: Sequelize.INTEGER,
        mage: Sequelize.INTEGER,
        mfal: Sequelize.INTEGER,
        mmap: Sequelize.INTEGER,
        mbib: Sequelize.INTEGER,
        mboletimia: Sequelize.INTEGER,
        minstrumento: Sequelize.INTEGER,
        expidebol: Sequelize.INTEGER,
        expcurso: Sequelize.INTEGER,
        expdiscip: Sequelize.INTEGER,
        expturma: Sequelize.INTEGER,
        expcodoco: Sequelize.INTEGER,
        expocorrencia: Sequelize.INTEGER,
        exphistor: Sequelize.INTEGER,
        extatvcom: Sequelize.INTEGER,
        expcalendario: Sequelize.INTEGER,
        expagenda: Sequelize.INTEGER,
        expconteudo: Sequelize.INTEGER,
        expaluno: Sequelize.INTEGER,
        expboletim: Sequelize.INTEGER,
        expfinanceiro: Sequelize.INTEGER,
        expprofessor: Sequelize.INTEGER,
        expfrequencia: Sequelize.INTEGER,
        expbanco: Sequelize.INTEGER,
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'configuracoes'
      }
    );

    return this;
  }
}

export default Configuracao;
