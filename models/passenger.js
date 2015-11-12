var mongoose        = require('mongoose');
var passengerSchema = new mongoose.Schema ({
  firstName : String,
  lastName  : String,
  dob       : { type: Date, default: Date.now }
});

mongoose.model('Passenger', passengerSchema);