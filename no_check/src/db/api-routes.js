// Require db models
var db = require("../models");

//Routes

module.exports = function(app)
{
    // Post a job to the db
    app.post("/api/Job_Posts", function(req, res)
    {
        db.Job_Posts.create(
        {
            jobTitle: req.body.jobTitle,
            company: req.body.company,
            salary: req.body.salary,
            summary: req.body.summary,
            crimeType: req.body.crimeType

        }).then(function(dbJob_Posts)
        {
            res.redirect("/jobs");
        })
    });

    // View all jobs
    app.get("/api/Job_Posts", function(req, res)
    {
        db.Job_Posts.findAll({}).then(function(dbJob_Posts)
        {
            res.render(dbJob_Posts);
        });
    });
};