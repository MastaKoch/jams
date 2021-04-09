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
    imagePath: "https://openclipart.org/image/800px/219987",
    title: "Reading",
    description: "The importance of Reading comprehension - The purpose of reading is comprehension — getting meaning from written text. ... A major goal of reading comprehension instruction, therefore, is to help students develop the knowledge, skills, and experiences they must have if they are to become competent and enthusiastic readers.",
    links: "https://www.youtube.com/watch?v=lLmloCC-0rM",
    comments:"This is an incredible resource for early development. I never realized before watching this video the importance or reading with my children versus reading to them.",
  },
  {
    imagePath: "https://openclipart.org/image/800px/317402",
    title: "Writing",
    description: "The importance of Writing - writing enhances problem-solving and critical thinking skills because words need to be written down in a particular order and structure. Thus children clearly need to process information to form words and construct sentences and paragraphs.",
    links: "https://vimeo.com/237791015",
    comments:"With writing fastly being replaced by keyboards, it is refreshing to learn how integral the skill is to young children's critical thinking development.",
  },
  {
    imagePath: "https://cdn.pixabay.com/photo/2017/01/31/20/53/robot-2027195_1280.png",
    title: "Technology",
    description: "The importance of Technology - The thoughtful use of technology by parents and early educators can engage children in key skills such as play, self-expression, and computational thinking which will support later success across all academic disciplines and help maintain young children’s natural curiosity.",
    links: "https://www.youtube.com/watch?v=LEVC_seRF80",
    comments:"As technology continues to evolve, it is comforting to know that there are resources available that allows me to safely explore with my children.",
  },
  {
    imagePath: "http://www.kinderq.ca/img/pic-creative-arts.png",
    title: "Art",
    description: "The importance of Creative Arts - Art, music, drama, and creativity teach problem-solving, which is a critical skill for success in life. By engaging in artistic activities and study, children develop confidence in their abilities, and they learn how to innovate. The arts encourage risk-free exploration, and it is this freedom that builds confidence.",
    links: "https://www.youtube.com/watch?v=QZQyV9BB50E",
    comments:"Awesome reminder that art forms differ in many ways and that children can benefit greatly from exploring them all.",
  },
  {
    imagePath: "https://openclipart.org/image/800px/278580",
    title: "Science",
    description: "The importance of Science - Science education activities provide children with opportunities to develop and practice many different skills and attributes. These include communication skills, collaborative skills, team working and perseverance, as well as analytical, reasoning and problem-solving skills.",
    links: "https://www.youtube.com/watch?v=lv6dC0coQeI",
    comments:"Love this! Great resource for stimulating little thinkers.",
  },
  {
    imagePath: "https://cdn.pixabay.com/photo/2015/11/15/07/44/mathematics-1044079_1280.jpg",
    title: "Math",
    description: "The importance of Math - Introducing maths to children from an early age helps to develop their understanding of all elements of problem solving and reasoning in a broad range of contexts. Numeracy also helps with understanding and using shapes and measure and developing their own spatial awareness.",
    links: "https://www.youtube.com/watch?v=igcoDFokKzU",
    comments:"Simple, and easy to incorporate into everyday activities for practice.",
  },
  {
    imagePath: "https://cdn.pixabay.com/photo/2016/10/10/01/43/construction-company-1727480_1280.png",
    title: "Engineering",
    description: "The importance of Engineering - Engineering teaches children from an early age the importance of team work and collaboration. It also helps children understand real-world technologies and problems, thus allowing them to see how their other school subjects are relative to their lives and the world around them.",
    links: "https://www.youtube.com/watch?v=btGYcizV0iI",
    comments:"I'm excited that this resource is a series and talks about the various types and aspects of engineering. Such a diverse field.",
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

  db.Comments
  .remove({})
  .then(() => db.Comments.insertMany(resourceSeed))
  .then(data => {
    console.log(data)

  
    //console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });