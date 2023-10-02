import Books from "../models/books.js";

export const findBookById = async (id) => {
  return await Books.findOne({ where: { id } });
};

export const createBook = async (title, releaseYear) => {
  return await Books.create({ title, releaseYear });
};
