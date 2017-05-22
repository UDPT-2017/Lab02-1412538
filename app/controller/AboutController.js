// about-controller
module.exports = {
  index: function(req, res, next) {
    res.render('about/index', {
      title: 'ABOUT',
      page: 'about'
    });
  }
}
