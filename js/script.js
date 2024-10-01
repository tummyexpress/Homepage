
(function ($) {
  'use strict';

  $(window).on('load', function () {
    $('#preloader').fadeOut('slow', function () {
      $(this).remove();
    });
  });
 

})(jQuery);

$('#signButton').click(function(){
  $('#hiddenForm').show();
});

$('#signRestButton').click(function(){
  $('#hiddenRestForm').show();
});