import Empresa from '../models/Empresa';

import { Op } from 'sequelize';

class EmpresaController {

  async index(req, res) {

    const escola = await Empresa.findOne({
      where: {
        id: {
          [Op.gt]: 0,
        }
      }
    });

    if (!escola) {
      // 401 Unauthorized
      return res.status(401).json({ error: 'Nenhuma Escola encontrada.' });
    }

    return res.json(escola);
  }
}


export default new EmpresaController();