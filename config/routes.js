var router = require('express').Router;
var controller = require('../app/controller/');

function checkAuth(req, res, next) {
  if (!req.session.user_id) {
    res.redirect('/login');
  } else {
    next();
  }
}

module.exports = function(app){
  var homeRouters = router()
    .get('/', checkAuth, controller.home.index);
  var aboutRouters = router()
    .get('/', checkAuth, controller.about.index);
  var loginRouters = router()
    .get('/', controller.login.index)
    .post('/', controller.login.submit);
  var registerRouters = router()
  .get('/', controller.register.index)
  .post('/', controller.register.submit);
  var logoutRouters = router()
    .get('/', controller.logout.index)

  app.use('/', homeRouters);
  app.use('/home', homeRouters);
  app.use('/about', aboutRouters);
  app.use('/login', loginRouters);
  app.use('/register', registerRouters);
  app.use('/logout', loginRouters);
};
