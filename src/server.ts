import express, { Express, Request, Response } from "express";
import cors from "cors";

const app: Express = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("ola mundo");
});

app.listen(process.env.PORT || 3003, () => {
  console.log("Servidor rodando!");
});
