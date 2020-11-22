import mongoose from 'mongoose';

<<<<<<< HEAD
=======
console.log(process.env.MONGODB_CONNECTION);
>>>>>>> 028138428ee3843f11ddce9bc7d6c5b897444c2a
const MONGODB_CONNECT = process.env.MONGODB_CONNECTION || '';

mongoose
  .connect(MONGODB_CONNECT, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(`Error ${err}`));
