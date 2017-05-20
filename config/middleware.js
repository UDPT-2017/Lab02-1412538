module.exports = function(app){
  var express = require('express');
  app.use(express.static('public'));
  app.use('/components', express.static('bower_components'));

  var bodyParser = require('body-parser');
  app.use(bodyParser.urlencoded({
    extended: true,
  }));
};
