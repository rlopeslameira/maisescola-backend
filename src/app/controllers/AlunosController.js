import Alunos from "../models/Alunos";

class AlunosController {
  async index(req, res) {

    const { escola, ano, seqano, matric } = req.query;

    const aluno = await Alunos.findOne({
      where: { escola, ano, seqano, matric },
    });

    if (!aluno) {
      return res.status(401).json({ error: 'Aluno não encontrado' });
    }

    return res.json(aluno);
  }
}


export default new AlunosController();