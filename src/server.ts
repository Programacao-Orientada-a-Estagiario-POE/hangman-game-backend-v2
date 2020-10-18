import "./config/env";
import express from "express";
import cors from "cors";
import routes from "./routes";
import "./config/database";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`);
});
