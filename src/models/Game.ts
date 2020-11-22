import { Document } from 'mongoose';

export default interface IGame extends Document {
  theme: string;
  word: string;
  createdAt: Date;
}
