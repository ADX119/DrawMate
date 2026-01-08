import { Request } from "express";

declare global {
  namespace Express {
    interface Request {
      user_id?: number;
      token?: string;
    }
  }
}
