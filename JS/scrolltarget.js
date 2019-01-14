$(document).ready(function(){
  $('#icon-2').css('opacity', 0);
  $('#left-list').css('opacity', 0);
  $('#right-list').css('opacity', 0);
  $('#right-text').css('opacity', 0);
  $('#icon-2').waypoint(function() {
      $('#icon-2').addClass('fadeInLeft icon-2');
      $('#icon-2').css('opacity', 1);
  }, { offset: '30%' });
  $('#left-list').waypoint(function() {
      $('#left-list').addClass('fadeInLeft left-list');
      $('#left-list').css('opacity', 1);
  }, { offset: '100%' });
  $('#right-list').waypoint(function() {
      $('#right-list').addClass('fadeInLeft right-list');
      $('#right-list').css('opacity', 1);
  }, { offset: '100%' });
  $('#right-text').waypoint(function() {
      $('#right-text').addClass('fadeInRight right-text');
      $('#right-text').css('opacity', 1);
  }, { offset: '100%' });
});
