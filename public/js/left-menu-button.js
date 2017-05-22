$(document).ready(function(){
  $('#offcanvasleft').click(function() {
    $('.row-offcanvas-left').toggleClass('active');
  });
  $('#loginbtn').click(function(){
    $(location).attr('href', '/login');
  });
  $('#cancelbtn').click(function(){
    $(location).attr('href', '/login');
  });
  $('#logoutbtn').click(function(){
    $(location).attr('href', '/logout');
  });
});
