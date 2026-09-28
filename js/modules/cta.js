import { showNext } from "./animation.js";

export const initCta = () => {
  const ctaCopy = document.querySelector(".js-cta-copy");
  const emphasisItem = document.querySelector(".js-emphasis");
  const popButtonItem = document.querySelector(".js-cta-button");
  const ctaDescription = document.querySelector(".js-cta-description");

  if (!ctaCopy || !emphasisItem || !popButtonItem || !ctaDescription) {
    return;
  }

  showNext(ctaCopy, emphasisItem, "transitionend", "transform");
  showNext(emphasisItem, ctaDescription, "animationend", "emphasis-animation");
  showNext(ctaDescription, popButtonItem, "transitionend", "transform");
};
