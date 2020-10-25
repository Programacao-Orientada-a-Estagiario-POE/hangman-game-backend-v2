import { Router } from 'express';
import GameController from './controllers/gameController';

const routes = Router();
const gameController = new GameController();

routes.post('/checkletter', gameController.checkLetter);
routes.get('/game-start', gameController.start);
routes.post('/game', gameController.create);

routes.get('/', (req, res) => {
  res.send('Olá');
});

export default routes;
