var express   = require('express');
var path      = require('path');
var logger    = require('morgan');
var app       = express();

app.use(logger('dev'));

var mongoose  = require('mongoose');
mongoose.connect('mongodb://localhost/airport-data');

require('./models/passenger');
var Passenger = mongoose.model("Passenger");
require('./models/flight');
var Flight    = mongoose.model("Flight");
require('./models/terminal');
var Terminal  = mongoose.model("Terminal");
require('./models/airport');
var Airport  = mongoose.model("Airport");


// var pip = new Passenger({
//   firstName: 'Pip',
//   lastName: 'Johnstone',
//   dob: 03/08/1980
// });

// pip.save(function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log('passenger created');
//   }
// });

Passenger.find( {}, function (err, passengers){
  if(err) {
    console.log(err);
  } else {
    console.log(passengers);
  }
});

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

Flight.find( {}, function (err, flight){
  if(err) {
    console.log(err);
  } else {
    console.log(flight);
  }
});

// var terminal1 = new Terminal({
//   name: "Terminal 1",
//   flights: [ { "_id": mongoose.Types.ObjectId("56442fd47cb24ecc61966629") }, { "_id": mongoose.Types.ObjectId("56442fd47cb24ecc6196662a") } ],
//   capacity: 234324
// });

// terminal1.save(function(err) {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log('terminal1 created');
//   };
// });

// Terminal.find( {}, function (err, terminal) {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log(terminal);
//   };
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

Airport.find( {}, function (err, airport) {
  if (err) {
    console.log(err);
  }
  else {
    console.log(airport);
  }
});
