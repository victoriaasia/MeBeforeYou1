$(document).ready(function(){
$(function() {
  var $slider = $('.wrapper__inner'),
      $slides = $('.wrapper__inner').find('.slide'),
      $next = $('.arrow.left'),
      slideIndex = 0,
      sliding = false;

  $slides.eq(slideIndex).show();
  $slider.on('click', '.arrow.left', function() {

      if (sliding) return false;
      sliding = true;
        $slider.fadeOut(0, function() {
              $slides.eq(slideIndex).hide();
              if (--slideIndex >= $slides.length) {
                slideIndex = 0;
              }

              $slides.eq(slideIndex).show();
              $slider.fadeIn(0);
              sliding = false;

          });
        });

     $slider.on('click', '.arrow.right', function() {

      if (sliding) return false;
      sliding = true;
        $slider.fadeOut(0, function() {
              $slides.eq(slideIndex).hide();
              if (++slideIndex >= $slides.length) {
                slideIndex = 0;
              }

              $slides.eq(slideIndex).show();
              $slider.fadeIn(0);
              sliding = false;

          });
  });
});

// $('#nav').click(function(){
//   $(this).toggleClass('open');
// });


});
