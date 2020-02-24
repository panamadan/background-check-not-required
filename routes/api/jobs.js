const router = require("express").Router();
const jobsController = require("../../controllers/jobsController")

router.route("/")
      .post(jobsController.create);

module.exports = router;