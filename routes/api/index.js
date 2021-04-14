const path = require("path");
const router = require("express").Router();
const eventRoutes = require("./events");
const pastEventRoutes = require("./pastevents");

// For anything else, render the html page
router.use("/events", eventRoutes);
router.use("/pastevents", pastEventRoutes);

router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../../client/public/index.html"));
});



module.exports = router;
