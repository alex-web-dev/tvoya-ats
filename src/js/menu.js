import $ from "jquery";

$(".toggle-menu").on("click", function () {
  $(".toggle-menu").toggleClass("is-active");
  $(".mobile-menu").toggleClass("is-active");
});
