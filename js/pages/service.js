import { showNext } from "../modules/animation.js";

export const initService = () => {
  const sectionTitle = document.querySelector(".js-section-title");
  const serviceAboutProblem01 = document.querySelector(
    ".js-service-about_problem01",
  );
  const serviceAboutProblem02 = document.querySelector(
    ".js-service-about_problem02",
  );
  const serviceAboutImage = document.querySelector(".js-service-about_image");
  const serviceAboutContentsInner = document.querySelector(
    ".js-service-about_contents-inner",
  );

  if (
    !sectionTitle ||
    !serviceAboutProblem01 ||
    !serviceAboutProblem02 ||
    !serviceAboutImage ||
    !serviceAboutContentsInner
  ) {
    return;
  }

  showNext(sectionTitle, serviceAboutProblem01, "transitionend", "transform");
  showNext(
    serviceAboutProblem01,
    serviceAboutProblem02,
    "animationend",
    "fadeIn-animation",
  );
  showNext(
    serviceAboutProblem02,
    serviceAboutImage,
    "animationend",
    "fadeIn-animation",
  );
  showNext(
    serviceAboutImage,
    serviceAboutContentsInner,
    "transitionend",
    "transform",
  );
};
