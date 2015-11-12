var express   = require('express');
var path      = require('path');
var logger    = require('morgan');
var app       = express();
var mongoose  = require('mongoose');
var Passenger = mongoose.model("Passenger");
var Flight    = mongoose.model("Flight");
var Terminal  = mongoose.model("Terminal");
var Airport   = mongoose.model("Airport");

app.use(logger('dev'));
mongoose.connect('mongodb://localhost/airport-data');

require('./models/passenger');
require('./models/flight');
require('./models/terminal');
require('./models/airport');


Passenger.find( {}, function (err, passengers){
  if(err) {
    console.log(err);
  } else {
    console.log(passengers);
  }
});

Flight.find( {}, function (err, flight){
  if(err) {
    console.log(err);
  } else {
    console.log(flight);
  }
});

Airport.find( {}, function (err, airport) {
  if (err) {
    console.log(err);
  }
  else {
    console.log(airport);
  }
});

// var pip = new Passenger({
//   firstName: 'Pip',
//   lastName: 'Johnstone',
//   dob: new Date (1980, 07, 03)
// });

// pip.save(function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log('passenger created');
//   }
// });

// var fligt1 = new Flight({
//   from: 'CDG France',
//   to: 'JFK New-York, USA',
//   airline: 'American Airlines'
// });

// var fligt2 = new Flight({
//   from: 'Heathrow UK',
//   to: 'JFK New-York, USA',
//   airline: 'British Airways'
// });

// fligt1.save(function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log('flight1 created');
//   }
// });

// fligt2.save(function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log('flight1 created');
//   }
// });

// var airport1 = new Airport({
//   name: "JFK",
//   country: "USA",
//   opened: new Date("1990")
// });

// airport1.terminals.push( {
//   name: 'Terminal 1',
//   capacity: 234324,
//   flights: [ {
//     "_id": mongoose.Types.ObjectId("56442fd47cb24ecc61966629") }, {
//     "_id": mongoose.Types.ObjectId("56442fd47cb24ecc6196662a") } ]
// });

// airport1.save(function(err) {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log('airport1 KABOOM! (Ive lost count)');
//   };
// });
