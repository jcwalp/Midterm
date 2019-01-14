$(document).ready(function(){
  $('#icon-2').css('opacity', 0);
  $('#left-list').css('opacity', 0);

  $('#icon-2').waypoint(function() {
      $('#icon-2').addClass('fadeInLeftBig icon-2');
      $('#icon-2').css('opacity', 1);
  }, { offset: '30%' });
  $('#left-list').waypoint(function() {
      $('#left-list').addClass('fadeInLeftBig left-list');
      $('#left-list').css('opacity', 1);
  }, { offset: '100%' });

});
