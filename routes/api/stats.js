const router = require("express").Router();
const statsController = require("../../controllers/statsController");

router
  .route("/")
  .get(statsController.getArtistTotal)
  .get(statsController.getStateTotal);

module.exports = router;
