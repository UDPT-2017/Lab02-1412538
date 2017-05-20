var router = require('express').Router;
var controller = require('../app/controller/');
module.exports = function(app){
  var homeRouters = router()
    .get('/', controller.home.index);
  var aboutRouters = router()
    .get('/', controller.about.index);

  app.use('/home', homeRouters);
  app.use('/about', aboutRouters);
};
