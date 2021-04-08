const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResourcePages = new Schema({
    imagePath: { type: String, required: true},
    title: { type: String, required: true},
    description: { type: String, required: true},
    links: { type: String, required: true},
    comments: {body: [String], date: Date},
    date: { type: Date, default: Date.now},

})

const ResourcePath = mongoose.model("ResourcePath", ResourcePages);

module.exports = ResourcePath;