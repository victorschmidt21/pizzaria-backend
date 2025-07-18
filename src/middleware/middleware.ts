import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
  sub: string;
}

export class Middleware {
  isAuth = (req: Request, res: Response, next: NextFunction) => {
    const authToken = req.headers.authorization;

    if (!authToken) {
      res.status(401).end();
    }
    const [, token] = authToken.split(" ");
    try {
      const { sub } = verify(token, process.env.JWT_SECRET) as Payload;
      req.userId = sub;
      return next();
    } catch {
      res.status(401).end();
      return;
    }
  };
}
