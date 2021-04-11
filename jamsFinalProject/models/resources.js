const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jamsSchema = new Schema({
  imagePath: { type: String, required: true},
  title: { type: String, required: true},
  description: { type: String, required: true},
  links: { type: String, required: true},
  comments: [
    {
      username: String,
      body: String,
      date: { type: Date, default: Date.now},
      
    },
  ],
});

const Resources = mongoose.model("Resources", jamsSchema);

module.exports = Resources;
