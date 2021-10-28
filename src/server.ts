import express, { Express, Request, Response } from "express";
import cors from "cors";

const app: Express = express();
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.status(200).send({ message: "olá mundooo" });
});

app.listen(process.env.PORT || 3003, () => {
  console.log("Servidor rodando!");
});
