import Sequelize from 'sequelize';

/**
 * IMPORTANDO O SCHEMA DE CLIENTES
 */
import Clientes from '../schemas/Clientes';

/**
 * IMPORTANDO OS MODELS
 */
import Carnes from '../models/Carnes';
import Alunos from '../models/Alunos';
import Professores from '../models/Professores';
import Periodos from '../models/Periodos';
import Configuracao from '../models/Configuracao';
import Empresa from '../models/Empresa';
import Bancos from '../models/Bancos';
import Carnesmen from '../models/Carnesmen';
import Codoco from '../models/Codoco';
import DiarioAvaliacoes from '../models/DiarioAvaliacores';
import DiarioConteudo from '../models/DiarioConteudo';
import DiarioFaltaDia from '../models/DiarioFaltaDia';
import DiarioFaltaMes from '../models/DiarioFaltaMes';
import DiarioDatLimFre from '../models/DiarioDatLimFre';
import DiarioGrade from '../models/DiarioGrade';
import DiarioNotas from '../models/DiarioNotas';
import Disciplinas from '../models/Disciplinas';
import FrequenciaDia from '../models/FrequenciaDia';
import FuncionarioTurma from '../models/FuncionarioTurma';
import Historico from '../models/Historico';
import HistoricoDisciplina from '../models/HistoricoDisciplina';
import Horario from '../models/Horario';
import Localizacao from '../models/Localizacao';
import Log from '../models/Log';
import Ouvidoria from '../models/Ouvidoria';
import OuvidoriaResposta from '../models/OuvidoriaResposta';
import Pessoas from '../models/Pessoas';
import RegistroOcorrencia from '../models/RegistroOcorrencia';
import RequerimentoWeb from '../models/RequerimentoWeb';
import Turmas from '../models/Turmas';
import AlunoLogado from '../models/AlunoLogado';
import Boletim from '../models/Boletim';

const models = [Empresa, Alunos, Professores,
  Periodos, Configuracao, Carnes,
  Bancos, Carnesmen, Codoco, DiarioAvaliacoes,
  DiarioConteudo, DiarioFaltaDia, DiarioFaltaMes,
  DiarioDatLimFre, DiarioGrade, DiarioNotas,
  Disciplinas, FrequenciaDia, FuncionarioTurma,
  Historico, HistoricoDisciplina, Horario,
  Localizacao, Log, Ouvidoria, OuvidoriaResposta,
  Pessoas, RegistroOcorrencia, RequerimentoWeb,
  Turmas, AlunoLogado, Boletim];

export default async (req, res, next) => {

  const { codigo, prefixo } = req.query;

  // verifica se a identificação da instituição foi informada
  if (!codigo && !prefixo) {
    return res.status(400).json({ error: 'A identificação da Instituição é obrigatória!' });
  }

  let result = null;

  // Busca os dados de conexão da instituição (host, user, pass, dbname)
  if (codigo) {
    result = await Clientes.findOne({
      codigo
    });
  }

  if (prefixo) {
    result = await Clientes.findOne({
      prefixo
    });
  }

  if (!result) {
    return res.status(400).json({ error: 'Instituição não encontrada!' });
  }

  /**
   * Seta a conexão com o banco de dados 
   * do cliente informado (código ou prefixo) 
   * */
  this.connection = new Sequelize({
    dialect: 'mysql',
    host: result.host,
    username: result.user,
    password: result.pass,
    database: result.dbname,
    define: {
      underscored: true,
      underscoredAll: true,
    },
  });

  models
    .map(model => model.init(this.connection))
    .map(model => model.associate && model.associate(this.connection.models));


  return next();

};