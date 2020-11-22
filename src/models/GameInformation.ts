import { Document } from 'mongoose';

export default interface IGameInformation extends Document {
  lifes: number;
  id_game: string;
  is_winner?: boolean;
  letters_indexes?: Array<Number>;
  createdAt?: Date;
}
