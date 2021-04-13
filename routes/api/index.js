const path = require("path");
const router = require("express").Router();
const eventRoutes = require("./events");

// For anything else, render the html page
router.use("/events", eventRoutes);

router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../../client/public/index.html"));
});



module.exports = router;
