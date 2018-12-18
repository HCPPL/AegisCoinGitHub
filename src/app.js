var express = require('express');
var app = express();

var DevAccController = require('./DevAccController');
app.use('/devAcc', DevAccController);

var AegisCoinController = require('./AegisCoinController');
app.use('/aegisCoin', AegisCoinController);

module.exports = app;
