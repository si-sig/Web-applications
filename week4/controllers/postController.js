var Post = require("../models/TableStatus");

// Good validation documentation available at https://express-validator.github.io/docs/
const { body, validationResult } = require("express-validator/check");
const { sanitizeBody } = require("express-validator/filter");

// Display list of all posts.
exports.index = function (req, res, next) {
  Post.find({}).exec(function (err, list_posts) {
    if (err) {
      return next(err);
    }
    // Successful, so render
    res.json(JSON.stringify(list_posts));
  });
};

// Handle book create on POST.
exports.create = function (req, res, next) {
  sanitizeBody("*").trim().escape();

  // Create a post object
  // Improve: Use promises with .then()
  /*var post = new Post({
    player_turn: req.body.player_turn,
    table_status: req.body.table_status
  });*/

  Post.findOneAndUpdate(
    { id: 1 },
    { player_turn: req.body.player_turn, table_status: req.body.table_status },
    { upsert: true },
    (err, doc) => {
      if (err) next(err);
      res.redirect("/");
    }
  );
};
