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

const models = [Empresa, Alunos, Professores, Periodos, Configuracao, Carnes];

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
  console.log(codigo);

  if (prefixo) {
    result = await Clientes.findOne({
      prefixo
    });
  }

  if (!result) {
    return res.status(400).json({ error: 'Instituição não encontrada!' });
  }

  // Seta a conexão com o banco de dados do cliente informado (código ou prefixo)
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