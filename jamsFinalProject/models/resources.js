const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jamsSchema = new Schema({
  imagePath: { type: String, required: true},
  title: { type: String, required: true},
  description: { type: String, required: true},
  links: { type: String, required: true},
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "comments",
    },
  ],
});

const Resources = mongoose.model("Resources", jamsSchema);

module.exports = Resources;
