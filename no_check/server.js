// Dependencies
const express = require("express");
const mongoose = require("mongoose");

// Require .env for mongoose
require("dotenv").config({path: "./.env"});

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
mongoose.connect(process.env.ATLAS_URI, {useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once("open", () => {console.log("MongoDB connection established successfully")});

// Routes
const createJobRouter = require("./src/routes/createJobs");

app.use("/create", createJobRouter);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
