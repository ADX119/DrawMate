import express, { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
// import { JWT_SECRET } from "./config";

import { middleware } from "./middleware";



const app = express();

app.post("/signup", (req: Request, res: Response) => {
  res.json();
});

app.post("/signin", (req: Request, res: Response) => {
  const user_id = 1;

  const token = jwt.sign(
    {
      user_id,
    },
    JWT_SECRET
  ) as string;

  res.json({ token });
});

app.post("/room", middleware, (req: Request, res: Response) => {
  res.json();
});

app.listen(8080, () => {
  console.log("HTTP Backend is running on http://localhost:8080");
});
