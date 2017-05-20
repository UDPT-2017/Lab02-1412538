module.exports = function(app){;
  require('./middleware')(app);
  require('./views')(app);
  require('./routes')(app);
};
