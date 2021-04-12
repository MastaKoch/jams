const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config()
// const router = express.Router();
// --------

// const cors = require("cors");
const passport = require("passport");
// const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
// const bodyParser = require("body-parser");
const User = require("./models/users");
const Comments = require("./controllers/commentsController")


const Resources = require("./models/resources");
// -------
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here -------------
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3001", // <-- location of the react app we're connecting to
    credentials: true,
  })
);
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./config/passportConfig")(passport);

// -----END of middleware-----


// ----
// Routes
app.post("/login", (req, res, next) => {
  console.log("RouteHit")
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) {
      res.send("No User Exists");
    } else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
        console.log(req.user);
      });
    }
  })(req, res, next);
});

app.post("/api/signup", (req, res) => {
  console.log(req.body);
  console.log("routehit");
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
      https://github.com/MastaKoch/jams/pull/47/conflict?name=jamsFinalProject%252Fserver.js&ancestor_oid=9e9b82b763dfb80caf3f1aba15e662db762d9c40&base_oid=e904e6935b3ee09c7105caa168bf8f8b1b59a9dd&head_oid=6aba6afa12102a4e63201d8fa694292b5164ec85});
      await newUser.save();
      res.send("User Created");
    }
  });
});


// // Route for logging user out -----
app.get("/api/logout", (req, res) => {
  console.log(req);
  req.logout();
  res.redirect("/");
});

app.get("/api/resources", (req, res) => {
  console.log("routeHit");
  Resources.find({}).then(dbResources => {
    res.json(dbResources);
    res.redirect("/resources");
  })
})

app.get("/api/user", (req, res) => {
  res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
});

// app.get("/api/comments", (req, res) => {
//  Comments.findAll(req, res)


// });

// app.post("/api/comments", (req, res) => {
//   Comments.findAll(req, res)

// });

app.put("/api/resources/:id", ({ body }, res) => {
  const comment = req.body.comment;
  db.Resources.findOneAndUpdate(
    {_id: req.params.id },
    { $push: { comments:req.body}},
    {new: true, runValidators: true})
    .then((dbResources) => {
      res.json(dbResources);
    })
    .catch(err => {
        res.json(err);
        console.log(err);
    })

  newComment.save();
});



// Serve up static assets (usually on heroku) ----
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
// app.use(routes);

// Connect to the Mongo DB ----
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/jamsDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Mongoose Is Connected");
  }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
