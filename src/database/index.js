import Sequelize from 'sequelize';

import Carnes from '../app/models/Carnes';
import Alunos from '../app/models/Alunos';

import databaseConfig from '../config/database';

const models = [Alunos, Carnes];

class Database {

  init(codigo) {

    console.log('Código: ', codigo);

    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }

}

export default new Database();
