import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import cors from "cors";
import { allRoutes } from "./routes/appRoute";
import path from "path";
const app = express();

app.use(express.json());
app.use(allRoutes);
app.use(cors());
app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    res.status(400).json({
      error: err.message,
    });
  }
  res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

app.listen(3333, () => console.log("Servidor online"));
