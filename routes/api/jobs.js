const router = require("express").Router();
let Job = require("../../models/job");

router.route("/").post((req,res) =>
{
    const jobTitle = req.body.jobTitle;
    const company = req.body.company;
    const salary = req.body.salary;
    const summary = req.body.summary;
    const crimeType = req.body.crimeType;
    const newJob = new Job({jobTitle, company, salary, summary, crimeType});

    newJob.save()
    .then(() => res.json("Job Created"))
    .catch(err => res.status(400).json("Error: " + err));
})

module.exports = router;