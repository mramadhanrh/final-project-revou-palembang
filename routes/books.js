import { Router } from "express";
import { getBookById, postCreateBook } from "../controllers/books.js";

const booksRouter = Router();

booksRouter.get("/:id", getBookById);

booksRouter.post("/", postCreateBook);

export default booksRouter;
