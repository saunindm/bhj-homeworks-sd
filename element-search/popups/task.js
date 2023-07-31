const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const modalClose = document.getElementsByClassName('modal__close');
    
closeWindows = () => {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.remove('modal_active');
}

openSecondWindow = () => {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
}

modalMain.classList.add('modal_active');
for (let i = 0; i < modalClose.length; i++) {
    modalClose[i].onclick = () => modalClose[i].classList.contains('modal__close_times') ? closeWindows() : openSecondWindow();
}