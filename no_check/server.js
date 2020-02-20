// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

// Require .env for mongoose
require("dotenv").config;

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware encoding here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Create connection to MongoDB
const uri = process.env.ATLAS_URI
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once("open", () => {console.log("MongoDB connection established successfully")});

// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
