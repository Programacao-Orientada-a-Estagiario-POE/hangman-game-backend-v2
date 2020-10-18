import { Request, Response } from "express";
import Game from "../entities/Game";

class GameController {
  // show products
  async start(req: Request, res: Response) {
    const countGames = await Game.countDocuments();
    const rand = Math.floor(Math.random() * countGames);
    const startedGame = await Game.findOne({}).skip(rand).select({
      theme: true,
      word: true,
      _id: true,
    });

    if (!startedGame) {
      return res.status(404).json({
        message: "Game not found",
      });
    }
    return res.json({
      id: startedGame._id,
      theme: startedGame.theme,
      quantityLetters: startedGame.word.length,
    });
  }

  // add new values
  async create(req: Request, res: Response) {
    const game = await Game.create(req.body);

    return res.json(game);
  }

  async checkLetter(req: Request, res: Response) {
    const { id, letter } = req.body;
    try {
      const game = await Game.findById(id);

      if (!game) {
        return res.status(404).json({
          message: "Game not found",
        });
      }

      const indexesOfLetters = this.getIndexesOfLettersByWord(
        game.word,
        letter
      );
      console.log(indexesOfLetters);

      if (!indexesOfLetters) {
        return res.json({ message: "Letter not founded" });
      }
      return res.json({ indexesOfLetters });
    } catch (error) {
      // return res.status(404).json({message: 'Id not founded'});
      return res.status(404).json({ message: error.message });
    }
  }

  private getIndexesOfLettersByWord(word: string, letterToVerify: string) {
    const indexesOfLetters: Array<number> = [];
    word.split("").forEach((letter, index) => {
      if (letter.toLowerCase() == letterToVerify.toLowerCase())
        indexesOfLetters.push(index);
    });

    return indexesOfLetters;
  }
}

const gameController = new GameController();

export default gameController;
