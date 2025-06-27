import $ from "jquery";

$(".accordion").each(function () {
  const $accordion = $(this);
  const $btn = $accordion.find(".accordion-btn");
  const $content = $accordion.find(".accordion__content");
  const $main = $accordion.find(".accordion__main");
  const delay = +$accordion.data("accordion-delay") || 500;
  const widthLimit = +$accordion.data("accordion-width");
  let animated = false;

  $content.css("transition", `height ${delay / 1000}s`);

  $btn.on("click", function () {
    if ((widthLimit && window.innerWidth > widthLimit) || animated) return;

    animated = true;

    const isActive = $accordion.hasClass("accordion--active");

    if (!isActive) {
      $btn.addClass("accordion-btn--active");
      $accordion.addClass("accordion--activating");
      $content.css("height", $main.outerHeight());
    } else {
      $btn.removeClass("accordion-btn--active");
      $content.css("height", $content[0].scrollHeight);
      $accordion.addClass("accordion--activating");
      setTimeout(() => $content.css("height", "0px"));
    }

    setTimeout(() => {
      animated = false;
      $accordion.removeClass("accordion--activating");
      $accordion.toggleClass("accordion--active", !isActive);
      if (!isActive) {
        $content.css("height", "");
      }
    }, delay);
  });
});
