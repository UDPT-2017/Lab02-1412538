// about-controller
module.exports = {
  index: function(req, res) {
    res.render('about/index', {
      title: 'ABOUT',
      page: 'about'
    });
  }
}
