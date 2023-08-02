const tabs = document.querySelectorAll('.tab');
const arr = Array.from(tabs);
const contents = document.querySelectorAll('.tab__content');

removeOtherActive = (currentIndex) => {
    arr.forEach(tab => {
        let i = arr.indexOf(tab);
        if (tab.classList.contains('tab_active') && (i !== currentIndex)) {
            tab.classList.remove('tab_active');
            contents[i].classList.remove('tab__content_active');
        }
    })
}

arr.forEach(tab => {
    tab.onclick = () => {
        let i = arr.indexOf(tab);
        tab.classList.add('tab_active');
        contents[i].classList.add('tab__content_active');
        removeOtherActive(i);
    }
})