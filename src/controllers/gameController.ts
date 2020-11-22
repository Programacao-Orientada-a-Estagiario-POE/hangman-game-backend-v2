import { Request, Response } from 'express';
import Game from '../entities/Game';
import GameInformation from '../entities/GameInformation';

class GameController {
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
        message: 'Game not found',
      });
    }

    const gameInformation = await GameInformation.create({
      id_game: startedGame._id,
      lifes: 6,
    });

    return res.json({
      id: gameInformation._id,
      lifes: gameInformation.lifes,
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
    const getIndexesOfLettersByWord = (
      word: string,
      letterToVerify: string
    ): Number[] => {
      const indexesOfLetters: Array<number> = [];
      word.split('').forEach((letter, index) => {
        if (letter.toLowerCase() == letterToVerify.toLowerCase())
          indexesOfLetters.push(index);
      });

      return indexesOfLetters;
    };

    const { id, letter } = req.body;
    try {
      const gameInformation = await GameInformation.findById(id);
      const game = await Game.findById(gameInformation?.id_game);

      if (!game || !gameInformation) {
        return res.status(404).json({
          message: 'Game not found',
        });
      }
      const indexesOfLetters = getIndexesOfLettersByWord(game.word, letter);

      if (!indexesOfLetters.length) {
        gameInformation.lifes--;
        await gameInformation.save();
        return res.json({
          message: 'Letter not founded',
          lifes: gameInformation.lifes,
          is_winner: gameInformation.is_winner,
        });
      }

      indexesOfLetters?.forEach(item => {
        if (gameInformation.letters_indexes?.indexOf(item) === -1) {
          gameInformation.letters_indexes?.push(item);
        }
      });

      if (gameInformation.letters_indexes?.length === game.word.length) {
        gameInformation.is_winner = true;
      }

      await gameInformation.save();

      return res.json({
        indexesOfLetters,
        lifes: gameInformation.lifes,
        is_winner: gameInformation.is_winner,
      });
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }
}

export default GameController;
