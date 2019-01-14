$(document).ready(function(){
  $('#left-image').css('opacity', 0);

  $('#icon-2').waypoint(function() {
      $('#icon-2').addClass('fadeInLeftBig icon-2');
      $('#left-image').css('opacity', 1);
  }, { offset: '30%' });

});
