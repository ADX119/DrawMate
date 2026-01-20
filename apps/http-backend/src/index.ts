import express, { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";

import { middleware } from "./middleware";
import { CreateUserSchema, CreateRoomSchema } from "@repo/common/types";



const app = express();

app.post("/signup", (req: Request, res: Response) => {

  const data = CreateUserSchema.safeParse(req.body);

  if(!data.success){
    res.json({
      message: "invalid data",
    })
    return;
  }
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

  const data = CreateRoomSchema.safeParse(req.body);

  if (!data.success) {
    res.json({
      message: "invalid data",
    });
    return;
  }
  res.json();
});

app.listen(8080, () => {
  console.log("HTTP Backend is running on http://localhost:8080");
});
