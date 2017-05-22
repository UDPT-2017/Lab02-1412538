var bcrypt = require('bcrypt');
var pool = require('./database');

var Users = {
  get_user_id: function(user_name, callback) {
    pool.query("select * from get_user_id($1::text);",[user_name], function(err, result) {
      callback(err, result.rows[0].user_id);
    });
  },
  check_user_name: function(user_name, callback) {
    pool.query("select * from check_user($1::text);",[user_name], function(err, result) {
      callback(err, result.rows[0].check_user);
    });
  },
  check_password: function(user_name, password, callback) {
    pool.query("select * from get_password($1::text);",[user_name], function(err, result) {
      var hash = bcrypt.hashSync(password, result.rows[0].salt_pw);
      callback(err, result.rows[0].passwd == hash);
    });
  },
  create_user: function(user_name, password, real_name, phone, callback) {
    var salt_pw = bcrypt.genSaltSync(10);
    password = bcrypt.hashSync(password, salt_pw);
    pool.query("select * from create_user($1::text, $2::text, $3::text, $4::text, $5::text);",
               [user_name, password, real_name, phone, salt_pw],
               function(err, result) { callback(err, result);}
    );
  },
}

module.exports = Users;

//Users.check_password('admin', 'adminadmin', function(err, result){ console.log(result);});
//Users.get_user_id('tranngocthanhtrameng@gmail.com', function(err, result){console.log(result);});
//Users.check_user_name('pht2707@gmail.com', function(err, result){console.log(result);});
//Users.create_user('tranngocthanhtrameng@gmail.com', '123456', 'Trần Ngọc Thanh Trâm', '01218946395', function(err, result){});
/*
pool.query("select passwd from users where user_id = 1;", [], function(err, result) {
  var salt = bcrypt.genSaltSync(10);
  var s = "$2a$10$7M436O/8CasrLKClE6r8qu";
  var hash = bcrypt.hashSync("123456", s);
  console.log(salt);
  console.log(hash);
  console.log(result.rows[0].passwd);
});
*/
