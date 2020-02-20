const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/"
);

const jobSeed = [
  {
    jobTitle: "Finance Planner",
    company: "JDD Finance",
    salary: "$20 per hour",
    summary:"Looking for someone with a finance backgorund for new clients",
    crimeType: "Felony"
  },
  {
    jobTitle: "Marketing",
    company: "Big Mountain Marketing",
    salary: "$50,000 - $75,000",
    summary:"Looking for someone with ideas and how to implementing them.",
    crimeType: "Felony"
  },
  {
    jobTitle: "Construction",
    company: "BBG Construction",
    salary: "$15 per hour",
    summary:"Looking for a hard worker to do construction work where needed.",
    crimeType: "Felony"
  },
  {
    jobTitle: "Assistant",
    company: "John R Accounting",
    salary: "$15-$20 per hour",
    summary:"Looking for an assistant to help with spreadsheets in accounting.",
    crimeType: "Misdemeanor"
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
