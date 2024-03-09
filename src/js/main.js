document.addEventListener("DOMContentLoaded", () => {
  AOS.init();
  const burgerBtn = document.querySelector(".mobile-nav__btn");
  const closeBtn = document.querySelector(".mobile-nav__close-btn");
  const mobileNavLinks = document.querySelector(".mobile-nav__links");
  const allMobileLink = document.querySelectorAll(".mobile-nav__link");
  const acutalYear = document.querySelector(".footer__year");
  const trustCard = document.querySelector(".trust-me__card");
  const imgBtn = document.querySelectorAll(".certificates__btn");
  const closePopupBtn = document.querySelectorAll(".certificates__popup-close");
  const popupBg = document.querySelectorAll(".certificates__popup-bg");
  const year = new Date().getFullYear();
  acutalYear.textContent = `${year} © REVELEQ-STUDIO`;
  const style = document.createElement("style");
  style.textContent = `
  body {
    overflow: hidden;
  }`;
  const showLinks = () => {
    mobileNavLinks.classList.add("active-nav");
    burgerBtn.classList.add("animation-rotate");
    document.body.appendChild(style)
    setTimeout(() => burgerBtn.classList.remove("animation-rotate"), 600);
  };
  const hideLinks = () => {
    mobileNavLinks.classList.remove("active-nav");
    closeBtn.classList.add("animation-rotate");
    document.body.removeChild(style)
    setTimeout(() => closeBtn.classList.remove("animation-rotate"), 600);
  };
  allMobileLink.forEach((link) =>
    link.addEventListener("click", () => {
      mobileNavLinks.classList.remove("active-nav");
      document.body.removeChild(style)
    })
  );
  closePopupBtn.forEach((e) => {
    e.addEventListener("click", () => {
      e.parentElement.classList.add("animation-hide");
      e.parentElement.classList.remove("animation-show");
      document.body.removeChild(style);
      setTimeout(() => {
        e.parentElement.classList.remove("active-popup");
      }, 501);
    });
  });
  imgBtn.forEach((e) => {
    e.addEventListener("click", () => {
      e.previousElementSibling.classList.remove("animation-hide");
      e.previousElementSibling.classList.add("active-popup");
      e.previousElementSibling.classList.add("animation-show");
      document.body.appendChild(style);
    });
  });
  popupBg.forEach((e) => {
    e.addEventListener("click", () => {
      e.parentElement.classList.add("animation-hide");
      e.parentElement.classList.remove("animation-show");
      document.body.removeChild(style);
      setTimeout(() => {
        e.parentElement.classList.remove("active-popup");
      }, 501);
    });
  });
  closeBtn.addEventListener("click", hideLinks);
  burgerBtn.addEventListener("click", showLinks);
});
