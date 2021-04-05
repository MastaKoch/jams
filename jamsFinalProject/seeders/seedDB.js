const mongoose = require("mongoose");
const db = require("../models");
// This file empties the Books collection and inserts the books below
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/jamsDB"
);
const SubjectsSeed = [
  {
    category: "Reading",
    source: "https://www.youtube.com/watch?v=lLmloCC-0rM",
    synopsis: "reading comprehension",
    response:"This resource helped me tremendously with my childs reading skills",
  },
  {
    category: "Writing",
    source: "https://vimeo.com/237791015",
    synopsis:"developing critical writing skills",
    response:"Great video! Very educational to me as a parent",
  },
  {
    category: "Technology",
    source: "",
    synopsis: "importance of computational thinking",
    response: "This source was supposed to be for my kids but i found it very helpful for myself as well!"
  },
  {
    category: "Arts",
    source: "",
    synopsis: "importance of artistic expression",
    response: "My kid loved the music and didn't even realize he was learning."
  },
  {
    category: "Science",
    source: "",
    synopsis: "importance of scientific expression",
    response: "This kid of mine hates science but the source helped her pay attention and understand more."
  },
  {
    category: "Math",
    source: "",
    synopsis: "importance of calculative data",
    response: "The real world scenarios were so helpful. Thank you!"
  },
  {
    category: "Engineering",
    source: "",
    synopsis: "importance of design, building, and structure.",
    response: "Never knew my kid would be so interested in engineering!",
  },
];
db.SubjectsSeed
  .remove({})
  .then(() => db.Subjects.collection.insertMany(SubjectsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });