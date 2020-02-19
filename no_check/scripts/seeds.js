const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/"
);

const jobSeed = [
  {
    jobTitle: "",
    company: "",
    salary: "",
    summary:"",
    crimeType: ""
  },
  {
    jobTitle: "",
    company: "",
    salary: "",
    summary:"",
    crimeType: ""
  },
  {
    jobTitle: "",
    company: "",
    salary: "",
    summary:"",
    crimeType: ""
  },
  {
    jobTitle: "",
    company: "",
    salary: "",
    summary:"",
    crimeType: ""
  },
]
  

db.Job
  .remove({})
  .then(() => db.Job.collection.insertMany(jobSeed))
  .then(data => {
    console.log(data.result.n + " jobs!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
