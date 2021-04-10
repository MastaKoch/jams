const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Users = new mongoose.Schema({
  username: String,
  password: String,
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comments",
    },
  ],
});

module.exports = mongoose.model("Users", Users);