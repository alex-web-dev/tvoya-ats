import IMask from "imask";
import $ from "jquery";

$(".imask").each(function () {
  const $input = $(this);
  const mask = $input.data("mask");

  IMask(this, { mask });
});
