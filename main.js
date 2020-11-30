$(function () {
  function nextImg() {
    if ($(".last").hasClass("active")) {
      $(".first").addClass("active");
      $(".last").removeClass("active");
    } else {
      $(".active").next().addClass("active");
      $(".active").prev().removeClass("active");
    }
  }
  function prevImg() {
    if ($(".first").hasClass("active")) {
      $(".last").addClass("active");
      $(".first").removeClass("active");
    } else {
      $(".active").prev().addClass("active");
      $(".active").next().removeClass("active");
    }
  }
  $(".next").click(function () {
    nextImg();
  });
  $(".prev").click(function () {
    prevImg();
  });
  $(document).keydown(function (e) {
    if (e.keyCode == 39) {
      nextImg();
    } else if (e.keyCode == 37) {
      prevImg();
    }
  });
});
