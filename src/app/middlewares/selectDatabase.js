import Sequelize from 'sequelize';

import Carnes from '../models/Carnes';
import Alunos from '../models/Alunos';
import Clientes from '../schemas/Clientes';

const models = [Alunos, Carnes];

export default async (req, res, next) => {

  const { codigo, prefixo } = req.query;

  if (!codigo && !prefixo) {
    return res.status(400).json({ error: 'A identificação da Instituição é obrigatória!' });
  }

  let result = null;

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