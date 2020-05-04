(() => {
    const button = document.querySelector(".js-main-nav__menu-button");
    const menu = document.querySelector(".js-main-nav__menu");
    const back_button = document.querySelector(".js-main-nav__menu-item-block")

    const toggleClass = () => {
        menu.classList.toggle("main-nav__menu--open");
    };

    button.addEventListener("click", toggleClass);
    menu.addEventListener("click", toggleClass);
    back_button.addEventListener("click", toggleClass);
    
})();