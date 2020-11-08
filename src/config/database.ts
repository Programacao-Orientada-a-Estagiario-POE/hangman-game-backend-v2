import mongoose from 'mongoose';

console.log(process.env.MONGODB_CONNECTION);
const MONGODB_CONNECT = process.env.MONGODB_CONNECTION || '';

mongoose.connect(MONGODB_CONNECT, { useNewUrlParser: true });
