import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./orm/data-source";

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "Hi" });
});

app.listen(3333, () => {
  console.log("Server is running!");
});

AppDataSource.initialize().catch((err) => {
  console.log("ORM-err", err);
});
