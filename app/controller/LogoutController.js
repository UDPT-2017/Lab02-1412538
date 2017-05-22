// logout-controller
module.exports = {
  index: function(req, res) {
    delete req.session.user_id;
    res.redirect('/login');
  }
}
