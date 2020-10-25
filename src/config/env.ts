import dotenv from "dotenv";
import path from "path";

console.log(process.env.NODE_ENV)

const envPath =
  process.env.NODE_ENV == "development"
    ? "../../.env.development"
    : "../../.env";

dotenv.config({
  path: path.resolve(__dirname, envPath),
});
