const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jamsSchema = new Schema({
  category: { type: String, required: true },
  source: { type: String, required: false },
  synopsis: { type: String, required: false },
  response: { type: String, required: false }
});

const Category = mongoose.model("Category", jamsSchema);

module.exports = Category;
