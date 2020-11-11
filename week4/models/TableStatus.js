var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var tableSchema = new Schema({
  id: { type: Number },
  player_turn: { type: Number },
  table_status: { type: [] }
});

//Export model
module.exports = mongoose.model("TableStatus", tableSchema);
