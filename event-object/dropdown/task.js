const dropdownValue = document.getElementsByClassName('dropdown__value');
const dropdownList = document.getElementsByClassName('dropdown__list');
const dropdownItems = document.getElementsByClassName('dropdown__item');
const items = Array.from(dropdownItems);

dropdownValue[0].onclick = () => dropdownList[0].classList.toggle('dropdown__list_active');

items.forEach(item => {
    item.onclick = () => {
        dropdownValue[0].textContent = item.textContent;
        dropdownList[0].classList.toggle('dropdown__list_active');
        return false;
    }
});