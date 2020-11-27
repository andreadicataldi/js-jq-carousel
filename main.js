$(function () {
  $(".next").click(function () {
    $(".active").next().addClass("active");
    $(".active").prev().removeClass("active");
  });
  $(".prev").click(function () {
    $(".active").prev().addClass("active");
    $(".active").next().removeClass("active");
  });
});


