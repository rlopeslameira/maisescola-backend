import Clientes from '../schemas/Clientes';

class ClientController {

  async index(req, res) {

    const { codigo } = req.query;

    const result = await Clientes.findOne({
      codigo
    });

    return res.json(result);
  }


  async store(req, res) {
    const { codigo, client, host, user, pass, dbname, prefixo } = req.body;

    const result = await Clientes.create({
      codigo, client, host, user, pass, dbname, prefixo
    });

    return res.json(result);
  }



  async update(req, res) {

    const { bloqueado } = req.body;
    const { codigo } = req.query;

    const result = await Clientes.findOneAndUpdate({
      codigo
    }, { bloqueado }, { new: true });


    return res.json(result);


    /*
    const { codigo, client, host, user, pass, dbname } = req.body;

    const result = await Clientes.create({
      codigo, client, host, user, pass, dbname
    });

    return res.json(result);
    */
  }
}

export default new ClientController();