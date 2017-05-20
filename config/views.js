module.exports = function(app){
  var exphbs = require('express-handlebars');
  var path = require("path");
  var hbs = exphbs.create({
    extname: '.hbs',
    defaultLayout: 'application',
    layoutsDir: path.resolve('./app/views/layouts'),
    partialsDir: path.resolve('./app/views/partials'),
    helpers: {
      navbar: require('../app/helpers/navbar')
    },
  });
  app.engine('hbs', hbs.engine);
  app.set('view engine', 'hbs');

  app.set('views', path.resolve("./app/views"));
};
