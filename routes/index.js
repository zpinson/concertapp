const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/index.js");

// API Routes
router.use("/api", apiRoutes);
router.use("/events", events);

// If no API routes are hit, send the React app
router.use("*", (req, res) =>
  res.sendFile(path.join(__dirname, "../client/public/index.html"))
);

module.exports = router;
