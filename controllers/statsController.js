const db = require("../models");

module.exports = {
  getArtistTotal: function (req, res) {
    db.PastEvent.find(req.query)
      .then(
        db.PastEvent.aggregate([
          { $group: { _id: "$artist_name", count: { $sum: 1 } } },
        ])
      )
      .then((res) =>
        res.json({
          _id: _id,
          count: count,
        })
      )
      .then(console.log("New Data ", req.body))
      .catch((err) => res.status(422).json(err));
  },
};
