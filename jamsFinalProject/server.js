const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
// --------
// cors securitty cross origin
const cors = require("cors");
// for the authenication
const passport = require("passport");
// a passport strategy
const passportLocal = require("passport-local").Strategy;
// parsing the authn. cookies 
const cookieParser = require("cookie-parser");
// bcrypt hashing the password 
const bcrypt = require("bcryptjs");
// for express sessions
const session = require("express-session");
// body parse parsing requests
const bodyParser = require("body-parser");
// -------
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/jamsdb");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
