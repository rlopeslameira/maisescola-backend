import Carnes from "../models/Carnes";

class BoletosController {
  async index(req, res) {

    const { escola, ano, seqano, matric, parcel } = req.query;

    //console.log(escola, ano, seqano, matric, parcel);

    const boleto = await Banco.findAll({
      where: { escola, ano, seqano, matric, parcel },
    });


    if (!boleto) {
      return res.status(401).json({ error: 'Boleto não encontrado' });
    }

    return res.json(boleto);
  }
}


export default new BoletosController();