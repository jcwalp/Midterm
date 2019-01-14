$(document).ready(function(){
  $('#icon-2').css('opacity', 0);
  $('#col-1').css('opacity', 0);
  $('#image-sub').css('opacity', 0);
  $('#icon-2').waypoint(function() {
      $('#icon-2').addClass('fadeInLeft icon-2');
      $('#icon-2').css('opacity', 1);
  }, { offset: '30%' });
  $('#col-1').waypoint(function() {
      $('#col-1').addClass('bounceInLeft col-1');
      $('#col-1').css('opacity', 1);
  }, { offset: '100%' });
  $('#image-sub').waypoint(function() {
      $('#image-sub').addClass('fadeInUp');
      $('#image-sub').css('opacity', 1);
  }, { offset: '100%' });
});
