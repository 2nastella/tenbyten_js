$(function () {
  $(".sub").hide();
  $(".menu > li")
    .mouseenter(function () {
      $(this).children(".sub").stop().fadeIn(100);
    })
    .mouseleave(function () {
      $(".sub").stop().fadeOut("fast");
    });
});


$(function () {
  $(".top_close_btn").click(function () {
    $("#headerbar").slideUp();
    $("#headerbar").stop().hide();
  });
});
