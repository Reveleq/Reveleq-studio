document.addEventListener("DOMContentLoaded", () => {
  setTimeout(function () {
    AOS.init();
  }, 500);
  const burgerBtn = document.querySelector(".mobile-nav__btn");
  const closeBtn = document.querySelector(".mobile-nav__close-btn");
  const mobileNavLinks = document.querySelector(".mobile-nav__links");
  const allMobileLink = document.querySelectorAll(".mobile-nav__link");
  const leftarrow = document.querySelectorAll(
    ".certificates__popup-left-arrow"
  );
  const rightarrow = document.querySelectorAll(
    ".certificates__popup-right-arrow"
  );
  const acutalYear = document.querySelector(".footer__year");
  const trustCard = document.querySelector(".trust-me__card");
  const imgBtn = document.querySelectorAll(".certificates__btn");
  const closePopupBtn = document.querySelectorAll(".certificates__popup-close");
  const popupBg = document.querySelectorAll(".certificates__popup-bg");
  const year = new Date().getFullYear();
  const imgOfGallery = document.querySelectorAll(".certificates__popup-img");
  acutalYear.textContent = `${year} © REVELEQ-STUDIO`;
  const style = document.createElement("style");

  style.textContent = `
  body {
    overflow: hidden;
  }`;
  let idOfImg = null;
  let lengthOfImg = null;
  const findIndexOfImg = (e) => {
    idOfImg = Number(e.id);
    lengthOfImg = imgBtn.length;
    const img = imgBtn[idOfImg - 1];
    if (idOfImg === 1) {
      leftarrow[idOfImg - 1].style.display = "none";
    } else if (idOfImg === lengthOfImg) {
      rightarrow[idOfImg - 1].style.display = "none";
    } else if (idOfImg < lengthOfImg) {
      leftarrow[idOfImg - 1].style.display = "block";
      rightarrow[idOfImg - 1].style.display = "block";
    }
  };
  const nextImg = () => {
    const img = closePopupBtn[idOfImg - 1];
    const nextImg = imgBtn[idOfImg];
    const wrapper = img.parentElement;
    wrapper.parentElement.classList.remove("active-popup");
    wrapper.parentElement.classList.remove("animation-show");
    nextImg.previousElementSibling.classList.add("active-popup");
    findIndexOfImg(nextImg);
  };
  const backImg = () => {
    const img = closePopupBtn[idOfImg - 1];
    const wrapper = img.parentElement;
    const backImg = imgBtn[idOfImg - 2];
    wrapper.parentElement.classList.remove("active-popup");
    wrapper.parentElement.classList.remove("animation-show");
    backImg.previousElementSibling.classList.add("active-popup");
    findIndexOfImg(backImg);
  };
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
  closePopupBtn.forEach((e) => {
    e.addEventListener("click", () => {
      const wrapper = e.parentElement;
      wrapper.parentElement.classList.add("animation-hide");
      wrapper.parentElement.classList.remove("animation-show");
      document.body.removeChild(style);
      setTimeout(() => {
        wrapper.parentElement.classList.remove("active-popup");
      }, 501);
    });
  });
  imgBtn.forEach((e) => {
    e.addEventListener("click", () => {
      findIndexOfImg(e);
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
  rightarrow.forEach((e) => {
    e.addEventListener("click", nextImg);
  });
  leftarrow.forEach((e) => {
    e.addEventListener("click", backImg);
  });
});
