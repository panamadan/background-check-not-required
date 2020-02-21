const path = require("path");
const router = require("express").Router();
const userRoutes = require("./users");
const jobRoutes = require("./jobs")

//User Routes
router.use("/users", userRoutes);

//Job Routes
router.use("/create", jobRoutes);
// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
