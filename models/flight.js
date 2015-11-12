var mongoose        = require('mongoose');
var flightSchema    = new mongoose.Schema ({
  from    : String,
  to      : String,
  airline : String
});

mongoose.model('Flight', flightSchema);
