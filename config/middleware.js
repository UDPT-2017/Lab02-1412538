module.exports = function(app) {
  var express = require('express');
  app.use(express.static('public'));
  app.use('/components', express.static('bower_components'));

  var session = require('express-session');
  app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}));
  
  var bodyParser = require('body-parser');
  app.use(bodyParser.urlencoded({
    extended: true,
  }));
};
