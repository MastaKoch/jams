const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Users = new mongoose.Schema({
  username: String,
  password: String,
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "comments",
    },
  ],
});

module.exports = mongoose.model("Users", Users);