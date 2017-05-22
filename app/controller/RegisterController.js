// about-controller

var _render = function(res, message, typeAlert, succession) {
  res.render('register/index', {
    title: 'WELCOM TO TT MESSAGE',
    layout: 'login-layout.hbs',
    message: message,
    typeAlert: typeAlert,
    succession: succession,
  });
};

var isEmpty = function(str) {
  return (str == undefined || str.trim().length == 0);
};

module.exports = {
  index: function(req, res) {
    _render(res, 'Please, enter your username and password!', 'alert alert-info', false);
  },
  submit: function(req, res) {
    if (isEmpty(req.body.r_user_name)) {
      _render(res, 'Empty "Username" filed is not allowed!', 'alert alert-danger', false);
    } else {
      if (isEmpty(req.body.r_password)) {
        _render(res, 'Empty "Password" filed is not allowed!', 'alert alert-danger', false);
      } else {
        if (req.body.r_password.length < 8) {
          _render(res, 'Password has to contain at least 8 characters!', 'alert alert-danger', false);
        } else {
          if (isEmpty(req.body.r_password_confirm)) {
            _render(res, 'Empty "Password confirmation" filed is not allowed!', 'alert alert-danger', false);
          } else {
            if (isEmpty(req.body.r_real_name)) {
              _render(res, 'Empty "phone" filed is not allowed!', 'alert alert-danger', false);
            } else
            if (req.body.r_password !== req.body.r_password_confirm) {
              _render(res, 'Password is not matched!', 'alert alert-danger', false);
            } else {
              require('../models/Users').check_user_name(req.body.r_user_name, function(err, isExists) {
                if (isExists) {
                  _render(res, 'Username alredy exists!', 'alert alert-danger', false);
                } else {
                  require('../models/Users').create_user(req.body.r_user_name,
                    req.body.r_password,
                    req.body.r_real_name,
                    req.body.r_phone,
                    function(err, result) {
                      if (err == null) {
                        _render(res, 'Register successfully!', 'alert alert-info', true);
                      } else {
                        _render(res, 'Register unsuccessfully!', 'alert alert-danger', false);
                      }
                    });
                }
              });
            }
          }
        }
      }
    }
  },
}
