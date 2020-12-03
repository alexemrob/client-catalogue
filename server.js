const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// SET UP ROUTES*/
// Setup app to serve static files from React App depending on dev/prod
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './client', 'build')));
}
// imports in ./routes/index.js (contains API and VIEW routes);
const routes = require("./routes");
// Sets express to use routes
app.use(routes);

// Connect to db
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/DBNAMEGOESHERE";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection;

// Logs error if mongoDB/mongoose runs into an error
db.on("error", (error) => {
  console.log(`DB Error: ${error}`);
});

// Imports in seed files

// Logs success if sucessfully connected to db
db.once("open", () => {
  console.log("DB connection successful!");
  console.log("Running Seeds...");
  require('./seeds/index.js')();
});

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});