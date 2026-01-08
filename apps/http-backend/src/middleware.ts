import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config";
import { JwtPayload } from "jsonwebtoken";

interface AuthPayload extends JwtPayload {
  user_id: number;
}

export function middleware(req: Request, res: Response, next: NextFunction) {
  const token = req.headers["authorization"] ?? "";

  const decoded = jwt.verify(token, JWT_SECRET) as AuthPayload;

  if (decoded) {
    req.user_id = decoded.user_id;
    next();
  } else {
    res.status(403).json({ message: "unauthorized" });
  }
}
