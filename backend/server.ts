import { Request, Response } from "express";
import app from "./app";

const PORT = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

app.listen(PORT, () => {
  console.log(`Server is Fire at http://localhost:${PORT}`);
});
