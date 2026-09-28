import { showNext } from "../modules/animation.js";

export const initTop = () => {
  initNumberSwing();
};

const initNumberSwing = () => {
  const numberSwingTrigger = document.querySelector(".js-number-swing-trigger");

  if (numberSwingTrigger) {
    const numberSwingItems = document.querySelectorAll(".js-number-swing");
    numberSwingItems.forEach((item) => {
      showNext(numberSwingTrigger, item, "transitionend", "transform");
    });
  }
};
