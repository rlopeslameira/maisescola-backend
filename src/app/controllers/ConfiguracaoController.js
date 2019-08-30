import Configuracao from '../models/Configuracao';

class ConfiguracaoController {

  async index(req, res) {

    const { escola } = req.body;

    const configuracoes = await Configuracao.findAll({
      where: {
        escola
      }
    })

    return res.json(configuracoes);

  }
}

export default new ConfiguracaoController();