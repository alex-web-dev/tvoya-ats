import $ from "jquery";

$(window).on("load", function () {
  $(".animate-scroll-mobile, .animate-scroll-desktop").each(function () {
    const $el = $(this);
    $el.css("animation", "none");
    $el[0].offsetHeight;
    $el.css("animation", "");
  });
});
