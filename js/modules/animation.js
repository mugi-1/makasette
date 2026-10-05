export const initAnimation = () => {
  const titleAnimation = document.querySelector(".js-title-animation");

  if (titleAnimation) {
    titleAnimation.classList.add("is-show");
  }

  const delayGroups = document.querySelectorAll(".js-delay-group");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-show");
        observer.unobserve(entry.target);
      }
    });
  });

  const showItems = document.querySelectorAll(".js-show");
  showItems.forEach((item) => {
    observer.observe(item);
  });

  delayGroups.forEach((group) => {
    const delayItems = group.querySelectorAll(".js-delay");
    const delayInterval = Number(group.dataset.delayInterval);

    delayItems.forEach((item, index) => {
      const delay = index * delayInterval;
      item.style.setProperty("--delay", delay.toFixed(2) + "s");
    });
  });
};

export const showNext = (currentItem, nextItem, eventName, filterName) => {
  const handleEnd = (e) => {
    if (eventName === "transitionend" && e.propertyName !== filterName) {
      return;
    }
    if (eventName === "animationend" && e.animationName !== filterName) {
      return;
    }
    nextItem.classList.add("is-show");
    currentItem.removeEventListener(eventName, handleEnd);
  };
  currentItem.addEventListener(eventName, handleEnd);
};
