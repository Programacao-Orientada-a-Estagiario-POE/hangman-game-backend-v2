import mongoose from 'mongoose';
import GameInformation from '../models/GameInformation';

const gameInformationSchema = new mongoose.Schema({
  lifes: {
    type: Number,
    Required: true,
  },
  id_game: {
    type: String,
    Required: true,
  },
  is_winner: {
    type: Boolean,
    default: false,
  },
  letters_indexes: {
    type: Array,
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const GameInformation = mongoose.model<GameInformation>(
  'gameInformation',
  gameInformationSchema
);

export default GameInformation;
