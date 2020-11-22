import mongoose from 'mongoose';

const MONGODB_CONNECT = process.env.MONGODB_CONNECTION || '';

mongoose
  .connect(MONGODB_CONNECT, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(`Error ${err}`));
