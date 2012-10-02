jQuery(function ($) {

  $("#go-to-suggestions").click(function() {
    $('html,body').animate({scrollTop: $("#suggestions").offset().top},'medium');
    return false;
  });


  $("#suggestion-form").submit(function() {
    var len = $("#suggestion").val().length;

    if ( len < 1 || len > 300 ) {
      $("#warning").css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 150);
      return false;
    } else {
      $("#warning").css("visibility", "hidden");
    }
  });

});
