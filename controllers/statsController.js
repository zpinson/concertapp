const db = require("../models");

module.exports = {  
  findAll: function (req, res) {
    db.PastEvent.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .then(console.log(req.body))
      .catch((err) => res.status(422).json(err));
  },
};
//  artistTotal: function (req, res) {
//     db.PastEvent.get(req.query)
//       .then((dbModel) => res.json(dbModel))
//       .then(
//         db.PastEvent.aggregate([
//           { $group: { _id: "$artist_name", count: { $sum: 1 } } },
//         ])
//       )
//       .then(console.log("New Data ", req.body))
//       .catch((err) => res.status(422).json(err));
//   },