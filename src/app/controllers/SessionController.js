import Alunos from '../models/Alunos';

import jwt from 'jsonwebtoken';

import authConfig from '../../config/auth';

class SessionController {
  async create(req, res) {

    const { codigo, matric, senha } = req.body;

    const aluno = await Alunos.findOne({
      where: {
        matric,
      },
    });

    if (!aluno) {
      return res.status(401).json({ error: 'Aluno não encontrado.' });
    }

    if (!(await aluno.checkPassword(senha))) {
      return res.status(401).json({ error: 'Senha incorreta.' });
    }

    return res.json({
      aluno: {
        nome: aluno.nome,
        turma: aluno.turma,
        turma_des: aluno.turma_des,
        curso: aluno.curso,
        curso_des: aluno.curso_des,
        sit: aluno.sit,
      },
      token: jwt.sign(aluno.id, authConfig.secret),
    });


  }
}

export default new SessionController();