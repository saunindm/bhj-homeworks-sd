const items = document.querySelectorAll('.slider__item');
const prev = document.getElementsByClassName('slider__arrow_prev');
const next = document.getElementsByClassName('slider__arrow_next');
const dots = document.querySelectorAll('.slider__dot');

let currentIndex = 0;
 
slider = () => {
    setActiveElements = (index) => {
        items.forEach((item, i) => {
            item.classList.toggle('slider__item_active', i === index);
        }) 
        dots.forEach((dot, i) => {
            dot.classList.toggle('slider__dot_active', i === index);
        })
    };

    dots.forEach((dot, i) => {
        dot.onclick = () => {
            dot.classList.toggle('slider__dot_active');
            setActiveElements(i);
        }
    })

    next[0].onclick = () => {
        currentIndex = (currentIndex + 1) % items.length;
        setActiveElements(currentIndex);
    };

    prev[0].onclick = () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        setActiveElements(currentIndex);
    };
};

slider();