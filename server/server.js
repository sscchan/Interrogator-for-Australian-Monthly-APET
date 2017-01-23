var express = require('express');
var gridParser = require(__dirname + '/lib/ASCII-Grid-Parser.js');

console.log(gridParser(__dirname + '/data/testASCIIgrid.txt'));
