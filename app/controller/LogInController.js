// login-controller

var _render = function(res, message, typeAlert) {
  res.render('login/index', {
    title: 'WELCOM TO TT MESSAGE',
    layout: 'login-layout.hbs',
    message: message,
    typeAlert: typeAlert,
  });
};

module.exports = {
    index: function(req, res) {
      _render(res, 'Please enter your username and password to log in!', 'alert alert-info');
    },
    submit: function(req, res) {
        require('../models/Users').check_user_name(req.body.user_name, function(err, isExists){
          if (!isExists){
            _render(res, 'Username is unavailable!', 'alert alert-danger');
          } else {
            require('../models/Users').check_password(req.body.user_name, req.body.password, function(err, result){
              if (!result) {
                _render(res, 'Password is wrong!', 'alert alert-danger');
              } else {
                require('../models/Users').get_user_id(req.body.user_name, function(err, id){
                  if (err == null){
                    req.session.user_id = id;
                    res.redirect('/home');
                  }
                  else {
                    _render(res, 'Password is wrong!', 'alert alert-danger');
                  }
                });
              }
            });
          }
        });
    }
}


/*

1) Check if the user is authenticated: I have a middleware function named CheckAuth which I use on every route that needs the user to be authenticated:
function checkAuth(req, res, next) {
  if (!req.session.user_id) {
    res.send('You are not authorized to view this page');
  } else {
    next();
  }
}

I use this function in my routes like this:
app.get('/my_secret_page', checkAuth, function (req, res) {
  res.send('if you are viewing this page it means you are logged in');
});


2) The login route:
app.post('/login', function (req, res) {
  var post = req.body;
  if (post.user === 'john' && post.password === 'johnspassword') {
    req.session.user_id = johns_user_id_here;
    res.redirect('/my_secret_page');
  } else {
    res.send('Bad user/pass');
  }
});

3) The logout route:
app.get('/logout', function (req, res) {
  delete req.session.user_id;
  res.redirect('/login');
});

*/
