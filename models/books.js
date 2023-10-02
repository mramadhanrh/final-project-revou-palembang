import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Books = sequelize.define("Books", {
  title: DataTypes.STRING,
  releaseYear: DataTypes.DATE,
});

export default Books;
