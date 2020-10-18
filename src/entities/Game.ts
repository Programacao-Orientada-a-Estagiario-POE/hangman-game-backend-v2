import mongoose from "mongoose";
import IGame from "../models/Game";

const gameSchema = new mongoose.Schema({
  theme: {
    type: String,
    Required: true,
  },
  word: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Game = mongoose.model<IGame>("game", gameSchema);

export default Game;
