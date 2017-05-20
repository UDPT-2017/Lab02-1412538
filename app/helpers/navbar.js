function capitalize(s) {
  return s && s[0].toUpperCase() + s.slice(1);
}
module.exports = function(page, icon) {
  var capIcon = capitalize(icon);
  if (page === icon) {
    return `<li><a href="/${icon}" id="fire">${capIcon}</a></li>`;
  } else {
    return `<li><a href="/${icon}">${capIcon}</a></li>`;
  }
};
