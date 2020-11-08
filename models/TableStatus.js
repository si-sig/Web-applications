var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var tableSchema = new Schema({
  player_turn: { type: Number },
  table_status: {}
});

//Export model
module.exports = mongoose.model("TableStatus", tableSchema);
