import { Router } from "express";
import gameController from "./controllers/gameController";
const routes = Router();

routes.post("/checkletter", gameController.checkLetter);
routes.get("/game-start", gameController.start);
routes.post("/game", gameController.create);

export default routes;
