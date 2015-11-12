var mongoose        = require('mongoose');

var terminalSchema    = new mongoose.Schema ({
  name: String,
  flights: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Flight'}], //array of referenced flight objects
  capacity: Number
});

mongoose.model('Terminal', terminalSchema);
