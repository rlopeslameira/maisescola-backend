import { Router } from 'express';

// clientes
import ClientController from './app/controllers/ClientController';

import PeriodoController from './app/controllers/PeriodoController';
import CarnesController from './app/controllers/CarnesController';
import SessionController from './app/controllers/SessionController';
import EmpresaController from './app/controllers/EmpresaController';
import sessionValitate from './app/middlewares/sessionValidator';
import BoletosController from './app/controllers/BoletosController';
import AlunosController from './app/controllers/AlunosController';

const routes = new Router();

import selectDatabase from './app/middlewares/selectDatabase';
import ConfiguracaoController from './app/controllers/ConfiguracaoController';

//CLIENTES
routes.get('/clients', ClientController.index);
routes.post('/clients', ClientController.store);
routes.put('/clients', ClientController.update);


// Rotas que deverão verificar se o usuário está logado
//routes.use(authMiddleware);

//routes.put('/users', UpdateStoreValidation, UserController.update);

routes.use(selectDatabase);

routes.get('/boletos', BoletosController.index);
routes.get('/alunos', AlunosController.index);


// ESCOLA
routes.get('/empresa', EmpresaController.index);

/**
 * LOGIN
 */
routes.post('/session', sessionValitate, SessionController.create)

/**
 * CARNES
 */
routes.get('/carnes', CarnesController.index);



routes.get('/periodos', PeriodoController.index);
routes.get('/config', ConfiguracaoController.index);

export default routes;
