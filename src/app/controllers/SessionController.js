import Alunos from '../models/Alunos';
import Professores from '../models/Professores';

import jwt from 'jsonwebtoken';

import authConfig from '../../config/auth';

class SessionController {
  async create(req, res) {

    const { matric, guerra, senha, tipo } = req.body;

    let pessoa = null;

    /**
     * Verifica se é login de professor
     * 
     */
    if (tipo === 'P') {
      pessoa = await Professores.findOne({
        where: {
          guerra,
        },
      });

    } else {
      pessoa = await Alunos.findOne({
        where: {
          matric,
        },
      });
    }

    if (!pessoa) {
      return res.status(401).json({ error: 'Usuário não encontrado.' });
    }

    if (!(await pessoa.checkPassword(senha))) {
      return res.status(401).json({ error: 'Senha incorreta.' });
    }

    /** 
     *  Retornando dados para o front
    */
    if (tipo === 'A') {

      return res.json({
        dados: {
          nome: pessoa.nome,
          turma: pessoa.turma,
          turma_des: pessoa.turma_des,
          curso: pessoa.curso,
          curso_des: pessoa.curso_des,
          sit: pessoa.sit,
        },
        token: jwt.sign(pessoa.matric, authConfig.secret),
      });
    } else {
      return res.json({
        dados: {
          matric: pessoa.matric,
          nome: pessoa.nome,
          guerra: pessoa.guerra,
          tipo: pessoa.tipo,
          email: pessoa.email,
          setor: pessoa.setor,
        },
        token: jwt.sign(pessoa.matric, authConfig.secret),
      });
    }

  }
}

export default new SessionController();