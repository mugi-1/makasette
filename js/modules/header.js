export const initHeader = () => {
  const hero = document.querySelector(".js-hero");
  const header = document.querySelector(".js-header");

  if (!hero || !header) {
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        header.classList.remove("is-scrolled");
      } else {
        header.classList.add("is-scrolled");
      }
    });
  });

  observer.observe(hero);
};
