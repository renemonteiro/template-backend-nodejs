import express, { Express, Request, Response } from "express";
import cors from "cors";
import { connection } from "./database/connection";

const app: Express = express();
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  const a = async () => {
    await connection.schema.raw(`
      INSERT INTO teste VALUES(
        10,
        "teste2"
      );
    `);
  };
  a();
  res.status(200).send({ message: "olá mundo!!" });
});

app.listen(process.env.PORT || 3003, () => {
  console.log("Servidor rodando!");
});
