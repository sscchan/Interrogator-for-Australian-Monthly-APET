var express = require('express');
var gridParser = require(__dirname + '/lib/ASCII-Grid-Parser.js');

// Parse all APET data
var APET = {};

function readAPETData() {
  console.log('Parsing APET ASCII Grids');

  APET.annual = gridParser(__dirname + '/data/00_etapann.txt');
  APET.january = gridParser(__dirname + '/data/01_etapjan.txt');
  APET.february = gridParser(__dirname + '/data/02_etapfeb.txt');
  APET.march = gridParser(__dirname + '/data/03_etapmar.txt');
  APET.april = gridParser(__dirname + '/data/04_etapapr.txt');
  APET.may = gridParser(__dirname + '/data/05_etapmay.txt');
  APET.june = gridParser(__dirname + '/data/06_etapjun.txt');
  APET.july = gridParser(__dirname + '/data/07_etapjul.txt');
  APET.august = gridParser(__dirname + '/data/08_etapaug.txt');
  APET.september = gridParser(__dirname + '/data/09_etapsep.txt');
  APET.october = gridParser(__dirname + '/data/10_etapoct.txt');
  APET.november = gridParser(__dirname + '/data/11_etapnov.txt');
  APET.december = gridParser(__dirname + '/data/12_etapdec.txt');
  console.log('Parsing APET ASCII Grids Done');
}
readAPETData();
console.log(APET);

// var parsedValue = gridParser(__dirname + '/data/testASCIIgrid.txt');
// console.log(parsedValue);

function getAPET(longitude, latitude) {
  // Round longitude to nearest 0.1 and latitude to nearest 0.x5
  var roundedLongitude = Math.round(longitude / 0.1) * 0.1;
  var roundedLatitude = Math.round(((latitude - 0.05) / 0.1)) * 0.1 + 0.05;
  
  // console.log('Rounded Longitude', roundedLongitude.toFixed(1));
  // console.log('Rounded Latitude', roundedLatitude.toFixed(2));
  var requestLocationString = roundedLongitude.toFixed(1) + ',' + roundedLatitude.toFixed(2);

  console.log('Request Value', requestLocationString);

  var APETResult = {};
  APETResult.annual = APET.annual.data[requestLocationString];
  APETResult.january = APET.january.data[requestLocationString];
  APETResult.february = APET.february.data[requestLocationString];
  APETResult.march = APET.march.data[requestLocationString];
  APETResult.april = APET.april.data[requestLocationString];
  APETResult.may = APET.may.data[requestLocationString];
  APETResult.june = APET.june.data[requestLocationString];
  APETResult.july = APET.july.data[requestLocationString];
  APETResult.august = APET.august.data[requestLocationString];
  APETResult.september = APET.september.data[requestLocationString];
  APETResult.october = APET.october.data[requestLocationString];
  APETResult.november = APET.november.data[requestLocationString];
  APETResult.december = APET.december.data[requestLocationString];

  console.log(APETResult);
  return APETResult;
}

getAPET(112.16, -43.78);
