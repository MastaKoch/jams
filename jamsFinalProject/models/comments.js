const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Comments = new Schema({
    comments: {body: [String], date: Date},
    date: { type: Date, default: Date.now},
});

module.exports = mongoose.model("Comments", Comments);

