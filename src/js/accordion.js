import $ from "jquery";

let animated = false;

$(".accordion").each(function () {
  const $accordion = $(this);
  const $box = $accordion.closest(".accordion-box");
  const $btn = $accordion.find(".accordion-btn");
  const $content = $accordion.find(".accordion__content");
  const delay = +$accordion.data("accordion-delay") || 450;
  const widthLimit = +$accordion.data("accordion-width");

  $content.css("transition", `height ${delay / 1000}s`);

  $btn.on("click", function () {
    if ((widthLimit && window.innerWidth > widthLimit) || animated) return;

    animated = true;

    setTimeout(() => (animated = false), delay);

    const $activatingAccordion = $box.find(".accordion--active");
    if ($activatingAccordion.length !== 0) {
      switchAccordion($activatingAccordion, true);
    }

    const isActive = $accordion.hasClass("accordion--active");
    switchAccordion($accordion, isActive, delay);
  });
});

function switchAccordion($accordion, isActive, delay = 450) {
  const $btn = $accordion.find(".accordion-btn");
  const $content = $accordion.find(".accordion__content");
  const $main = $accordion.find(".accordion__main");

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
    $accordion.removeClass("accordion--activating");
    $accordion.toggleClass("accordion--active", !isActive);
    if (!isActive) {
      $content.css("height", "");
    }
  }, delay);
}
