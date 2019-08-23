import { Router } from 'express';

import CarnesController from './app/controllers/CarnesController';
import SessionController from './app/controllers/SessionController';

import sessionValitate from './app/middlewares/sessionValidator';

const routes = new Router();


routes.get('/carnes', CarnesController.index);

routes.post('/session', sessionValitate, SessionController.create)

// Rotas que deverão verificar se o usuário está logado
//routes.use(authMiddleware);

//routes.put('/users', UpdateStoreValidation, UserController.update);


export default routes;
