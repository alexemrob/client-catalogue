require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

const cors = require("cors");
app.use(cors());

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Sets express to use routes
app.use(routes);

// Connect to db
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/clients";
mongoose.connect(MONGODB_URI || 'mongodb://localhost/clients',

{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}
)
.then(()=>{
  console.log("successfully connected")
})
.catch((e)=>{
  console.log(e)
})



// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});