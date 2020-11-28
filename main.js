$(function () {
  $(".next").click(function () {
    if ($(".last").hasClass("active") == true) {
      $(".first").addClass("active");
      $(".last").removeClass("active");
    } else {
      $(".active").next().addClass("active");
      $(".active").prev().removeClass("active");
    }
  });
  $(".prev").click(function () {
    if ($(".first").hasClass("active") == true) {
      $(".last").addClass("active");
      $(".first").removeClass("active");
    } else {
      $(".active").prev().addClass("active");
      $(".active").next().removeClass("active");
    }
  });
});
