document.addEventListener("DOMContentLoaded", () => {
  setTimeout(function () {
    AOS.init();
  }, 500);
  const burgerBtn = document.querySelector(".mobile-nav__btn");
  const closeBtn = document.querySelector(".mobile-nav__close-btn");
  const mobileNavLinks = document.querySelector(".mobile-nav__links");
  const allMobileLink = document.querySelectorAll(".mobile-nav__link");
  const acutalYear = document.querySelector(".footer__year");
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
    document.body.appendChild(style);
    setTimeout(() => burgerBtn.classList.remove("animation-rotate"), 600);
  };
  const hideLinks = () => {
    mobileNavLinks.classList.remove("active-nav");
    closeBtn.classList.add("animation-rotate");
    document.body.removeChild(style);
    setTimeout(() => closeBtn.classList.remove("animation-rotate"), 600);
  };
  allMobileLink.forEach((link) =>
    link.addEventListener("click", () => {
      mobileNavLinks.classList.remove("active-nav");
      document.body.removeChild(style);
    })
  );
  closeBtn.addEventListener("click", hideLinks);
  burgerBtn.addEventListener("click", showLinks);
});
