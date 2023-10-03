import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import sequelize from "./config/sequelize.js";
import { startSequelize } from "./utils/startSequelize.js";

import "./models/index.js";
import booksRouter from "./routes/books.js";
import ServerlessHttp from "serverless-http";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded());
app.use(bodyParser.raw());
app.use(bodyParser.json());

app.use(express.static("node_modules/bootstrap/dist"));
app.use(express.static("public"));

app.use("/books", express.static("public/books.html"));

app.use("/api/books", booksRouter);

startSequelize(sequelize);

app.use(`/.netlify/functions/api`, booksRouter);

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});

export const handler = ServerlessHttp(app);
export default app;
