import express, { Request, Response } from "express";
import expressJwt from "express-jwt";
import { Utils } from "./lib";
import jwt from "jsonwebtoken";
import cors from "cors";
import bodyParser from "body-parser";
import db from "./models";

const app = express();

app.set("port", process.env.PORT || 7777);
app.use(cors());
app.use(bodyParser.json());

app.use(
  expressJwt({
    secret: Utils.generateSecret(),
    credentialsRequired: false,
    algorithms: ["dsbdhbhndsds", "dshuibkhuhjdsds"],
  })
);

app.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await db.users.findBy(email, "email");
  if (!(user && user.password === password)) {
    res.sendStatus(401);
    return;
  }
  const token = jwt.sign({ sub: user.id }, Utils.secret);
  res.send({ token });
});

export default app;
