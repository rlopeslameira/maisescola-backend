import Periodos from '../models/Periodos';

class PeriodoController {

  async index(req, res) {

    const periodos = await Periodos.findAll({
      where: {
        sel: 'S',
      }
    })

    return res.json(periodos);

  }
}

export default new PeriodoController();