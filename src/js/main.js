document.addEventListener("DOMContentLoaded", () => {
const burgerBtn = document.querySelector('.mobile-nav__btn')
const closeBtn = document.querySelector('.mobile-nav__close-btn')
const mobileNavLinks = document.querySelector('.mobile-nav__links')
const allMobileLink = document.querySelectorAll('.mobile-nav__link')
const acutalYear = document.querySelector('.footer__year')
const trustCard = document.querySelector('.trust-me__card')
const imgBtn = document.querySelectorAll('.certificates__btn')
const closePopupBtn = document.querySelectorAll('.certificates__popup-close')
const year = new Date().getFullYear()
acutalYear.textContent = `${year} © REVELEQ-STUDIO`
const showLinks = () => {
    mobileNavLinks.classList.add('active-nav')
    burgerBtn.classList.add('animation-rotate')
    setTimeout( () => burgerBtn.classList.remove('animation-rotate'), 600)
}
const hideLinks = () => {
     mobileNavLinks.classList.remove('active-nav')
     closeBtn.classList.add('animation-rotate')
    setTimeout( () => closeBtn.classList.remove('animation-rotate'), 600)
}
   allMobileLink.forEach( (link) => 
    link.addEventListener('click', () => {
        mobileNavLinks.classList.remove('active-nav')
    }));
    closePopupBtn.forEach( e => {
        e.addEventListener('click', () => {
            e.parentElement.classList.add('animation-hide')
            e.parentElement.classList.remove('animation-show')
            setTimeout( () => {
        e.parentElement.classList.remove('active-popup')
        } , 501)


        })
    })
imgBtn.forEach( e => {
    e.addEventListener('click', () => {
        e.previousElementSibling.classList.remove('animation-hide')
        e.previousElementSibling.classList.add('active-popup')
e.previousElementSibling.classList.add('animation-show')

    })
})
closeBtn.addEventListener('click', hideLinks)
burgerBtn.addEventListener('click', showLinks)
});