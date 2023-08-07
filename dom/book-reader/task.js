const nodedList = document.querySelectorAll('.font-size');
const fontSizes = Array.from(nodedList);
const book = document.getElementById('book');

changeFontSize = () => {
    removeOtherActive = (currentIndex) => {
        fontSizes.forEach(fontSize => {
            let i = fontSizes.indexOf(fontSize);
            if (fontSize.classList.contains('font-size_active') && (i !== currentIndex)) {
                fontSize.classList.remove('font-size_active');
            }
        })
    }
    
    fontSizes.forEach(fontSize => {
        fontSize.onclick = () => {
            let i = fontSizes.indexOf(fontSize);
            fontSize.classList.add('font-size_active');
            if (i === 0) {
                book.setAttribute('class', 'book_fs-small')
            } else if (i === 2) {
                book.setAttribute('class', 'book_fs-big')
            } else {book.setAttribute('class', 'book')}
            removeOtherActive(i);
            return false;
        }   
    })
}

changeFontSize();