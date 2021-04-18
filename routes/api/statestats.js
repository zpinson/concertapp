const router = require("express").Router();
const statsController = require("../../controllers/statsController");

router
  .route("/states")
  .get(statsController.getStateTotal);

module.exports = router;
