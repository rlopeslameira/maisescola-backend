import Carnes from "../models/Carnes";
import Alunos from '../models/Alunos';

class CarnesController {
  async index(req, res) {

    const { escola, ano, seqano, matric } = req.query;

    const lista = await Carnes.findAll({
      where: { escola, ano, seqano, matric },
      order: ['parcel'],
      include: [
        {
          model: Alunos,
          as: 'alunos',
          attributes: ['nome'],
        },
      ]
    });

    return res.json(lista);
  }
}


export default new CarnesController();