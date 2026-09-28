import { showNext } from "../modules/animation.js";

export const initPrice = () => {
  const priceStructureItem = document.querySelector(".js-price-structure_item");

  const priceStructureBadgeItems = document.querySelectorAll(
    ".js-price-structure_badge",
  );

  if (!priceStructureItem || !priceStructureBadgeItems) {
    return;
  }

  priceStructureBadgeItems.forEach((item) => {
    showNext(priceStructureItem, item, "transitionend", "transform");
  });

  const pricePointItems = document.querySelectorAll(".js-price-point");

  pricePointItems.forEach((item, index) => {
    if (pricePointItems[index + 1]) {
      showNext(
        item,
        pricePointItems[index + 1],
        "animationend",
        "deco-animation",
      );
    }
  });
};
