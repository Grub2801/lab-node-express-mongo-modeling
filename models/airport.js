var mongoose = require('mongoose');
require('./terminal');
var Terminal  = mongoose.model("Terminal");

var airportSchema = new mongoose.Schema({
  name      : String,
  country   : String,
  terminals : [Terminal.schema],
  opened    : Date
});

mongoose.model('Airport', airportSchema);