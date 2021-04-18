const router = require("express").Router();
const statsController = require("../../controllers/statsController");

router.route("/artists")
    .get(statsController.getArtistTotal);

module.exports = router;
