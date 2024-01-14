$(".open-menu").on("click", function (e) {
  e.preventDefault();
  $(".sidebar").addClass("active");
  $(".shrink-icon-sidebar").addClass("active");
  $(".overlay").addClass("active");
});

$(".dismiss, .overlay").on("click", function () {
  $(".sidebar").removeClass("active");
  $(".overlay").removeClass("active");
  $(".shrink-icon-sidebar").removeClass("active");
});
