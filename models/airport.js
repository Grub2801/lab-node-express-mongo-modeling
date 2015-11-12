var mongoose      = require('mongoose');
var Terminal      = mongoose.model("Terminal");
var airportSchema = new mongoose.Schema({
  name      : String,
  country   : String,
  terminals : [Terminal.schema],
  opened    : Date
});

require('./terminal');
mongoose.model('Airport', airportSchema);