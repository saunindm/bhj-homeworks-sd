closeOtherSubMenu = (currentSubMenu) => {
    const menuSub = document.querySelectorAll('.menu_sub');
    menuSub.forEach((menuSub) => {
        if (menuSub.classList.contains('menu_active') && menuSub !== currentSubMenu) {
            menuSub.classList.remove('menu_active');
        } 
    });
};

const menuLink = document.querySelectorAll('.menu__link');
menuLink.forEach((menuLink) => {
    const menuItem = menuLink.closest('.menu__item');
    const menuSub = menuItem.querySelector('.menu__item ul');
    menuLink.onclick = () => {
        if (menuSub !== null) {
            (menuSub.classList.contains('menu_active')) ? menuSub.classList.remove('menu_active') : menuSub.classList.add('menu_active');
            closeOtherSubMenu(menuSub);
            return false;
        }
    }
});