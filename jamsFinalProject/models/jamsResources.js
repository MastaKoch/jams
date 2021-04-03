const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jamsSchema = new Schema({
  category: { type: String, required: true },
  source: { type: String, required: true },
  synopsis: { type: String, required: true },
  response: { type: String, required: true }
});

const JamsResources = mongoose.model("JamsResources", jamsSchema);

module.exports = JamsResources;
