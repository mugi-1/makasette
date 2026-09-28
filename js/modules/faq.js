export const initFaq = () => {
  const faqItems = document.querySelectorAll(".p-faq-item");

  faqItems.forEach((item) => {
    const faqQuestion = item.querySelector(".p-faq-question");
    const faqAnswer = item.querySelector(".p-faq-answer");

    faqQuestion.addEventListener("click", (e) => {
      // 処理を記載
      e.preventDefault();
      if (!item.open) {
        item.open = true;
        faqAnswer.style.height = `${faqAnswer.scrollHeight}px`;
        faqAnswer.style.opacity = "1";
        faqAnswer.style.marginTop = "18px";
      } else {
        faqAnswer.style.height = "0";
        faqAnswer.style.opacity = "0";
        faqAnswer.style.marginTop = "0";

        faqAnswer.addEventListener(
          "transitionend",
          () => {
            item.open = false;
          },
          { once: true },
        );
      }
    });
  });
};
