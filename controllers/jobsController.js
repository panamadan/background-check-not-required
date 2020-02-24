const db = require("../models/job");

module.exports ={
    findAll: function(req, res)
    {
        db.Job
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    create: function(req, res)
    {
        console.log("Data in JobsController: " + req.body)
        db.Job
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
}