import Carnes from "../models/Carnes";
import Alunos from '../models/Alunos';

class CarnesController {
  async index(req, res) {

    const { escola, ano, seqano, matric } = req.query;

    const lista = await Carnes.findAll({
      where: { escola, ano, seqano, matric },
      order: ['parcel']
    });

    return res.json(lista);
  }
}


export default new CarnesController();