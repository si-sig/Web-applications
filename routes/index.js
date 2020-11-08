var express = require("express");
var router = express.Router();
let Table = require("../models/TableStatus");

// GET home page.
/*router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
*/
router.get("/game", function (req, res, next) {
  Table.find().then((doc) => res.json(JSON.stringify(doc)));
});

module.exports = router;
