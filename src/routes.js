import { Router } from 'express';

// clientes
import ClientController from './app/controllers/ClientController';

import CarnesController from './app/controllers/CarnesController';
import SessionController from './app/controllers/SessionController';

import sessionValitate from './app/middlewares/sessionValidator';

const routes = new Router();

import selectDatabase from './app/middlewares/selectDatabase';

//CLIENTES
routes.get('/clients', ClientController.index);
routes.post('/clients', ClientController.store);
routes.put('/clients', ClientController.update);


// Rotas que deverão verificar se o usuário está logado
//routes.use(authMiddleware);

//routes.put('/users', UpdateStoreValidation, UserController.update);

routes.use(selectDatabase);
routes.get('/carnes', CarnesController.index);
routes.post('/session', sessionValitate, SessionController.create)


export default routes;
