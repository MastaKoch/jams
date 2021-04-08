const mongoose = require("mongoose");
const db = require("../models");
require('dotenv').config()

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/jamsDB",
  { 
    useNewUrlParser: true 
  }
);
const resourceSeed = [
  {
    category: "Reading",
    source: "https://www.youtube.com/watch?v=lLmloCC-0rM",
    synopsis: "Reading comprehension",
    response:"This resource helped me tremendously with my childs reading skills",
  },
  {
    category: "Writing",
    source: "https://vimeo.com/237791015",
    synopsis:"Developing critical writing skills.",
    response:"Great video! Very educational to me as a parent",
  },
  {
    category: "Technology",
    source: "https://www.youtube.com/watch?v=LEVC_seRF80",
    synopsis: "importance of computational thinking",
    response: "This source was supposed to be for my kids but i found it very helpful for myself as well!"
  },
  {
    category: "Arts",
    source: "https://www.youtube.com/watch?v=QZQyV9BB50E",
    synopsis: "importance of artistic expression",
    response: "My kid loved the music and didn't even realize he was learning."
  },
  {
    category: "Science",
    source: "https://www.youtube.com/watch?v=lv6dC0coQeI",
    synopsis: "importance of scientific expression",
    response: "This kid of mine hates science but the source helped her pay attention and understand more."
  },
  {
    category: "Math",
    source: "https://www.youtube.com/watch?v=igcoDFokKzU",
    synopsis: "importance of calculative data",
    response: "The real world scenarios were so helpful. Thank you!"
  },
  {
    category: "Engineering",
    source: "https://www.youtube.com/watch?v=btGYcizV0iI",
    synopsis: "importance of design, building, and structure.",
    response: "Never knew my kid would be so interested in engineering!",
  },
];

// Needs a comments DB and connecting user id to the catergory id for users to leave

db.Resources
  .remove({})
  .then(() => db.Resources.insertMany(resourceSeed))
  .then(data => {
    console.log(data)

  
    //console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });