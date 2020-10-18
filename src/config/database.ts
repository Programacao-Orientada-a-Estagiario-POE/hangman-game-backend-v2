import mongoose from "mongoose";

const MONGODB_CONNECT = process.env.MONGODB_CONNECTION || "";

mongoose.connect(MONGODB_CONNECT, { useNewUrlParser: true });
