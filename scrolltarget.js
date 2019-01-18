$(document).ready(function(){
  $('#icon-2').css('opacity', 0);
  $('#col-1').css('opacity', 0);
  $('#single-btn').css('opacity', 0);
  $('#contact').css('opacity', 0);
  $('#line').css('opacity', 0);


  $('#icon-2').waypoint(function(direction) {
    if (direction === 'down'){
      $('#icon-2').addClass('fadeInLeft icon-2');
      $('#icon-2').removeClass('fadeOutRight icon-2');
    }
    else if (direction === 'up'){
      $('#icon-2').addClass('fadeOutRight icon-2');
      $('#icon-2').removeClass('fadeInLeft icon-2');
    }
  }, { offset: '30%' });
  $('#col-1').waypoint(function(direction) {
    if (direction === 'down'){
      $('#col-1').addClass('fadeInLeft ');
      $('#col-1').removeClass('fadeOutRight ');
    }
    else if (direction === 'up'){
      $('#col-1').addClass('fadeOutRight ');
      $('#col-1').removeClass('fadeInLeft ');
    }
  }, { offset: '80%' });
  $('#single-btn').waypoint(function(direction) {
    if (direction === 'down'){
      $('#single-btn').addClass('fadeInRight');
      $('#single-btn').removeClass('fadeOutLeft');
    }
    else if (direction === 'up'){
      $('#single-btn').addClass('fadeOutLeft');
      $('#single-btn').removeClass('fadeInRight');
    }
  }, { offset: '50%' });
  $('#contact').waypoint(function(direction) {
    if (direction === 'down'){
      $('#contact').addClass('fadeInUp');
      $('#contact').removeClass('fadeOutDown');
    }
    else if (direction === 'up'){
      $('#contact').addClass('fadeOutDown');
      $('#contact').removeClass('fadeInUp');
    }
  }, { offset: '30%' });
  $('#line').waypoint(function(direction) {
    if (direction === 'down'){
      $('#line').addClass('fadeInLeft');
      $('#line').removeClass('fadeOutRight');
    }
    else if (direction === 'up'){
      $('#line').addClass('fadeOutRight');
      $('#line').removeClass('fadeInLeft');
    }
  }, { offset: '70%' });
});
