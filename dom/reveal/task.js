const reveal = document.querySelectorAll('.reveal');
const arr = Array.from(reveal);

arr.forEach(reveal => {
    document.addEventListener("scroll", () => {
        const { top, bottom } = reveal.getBoundingClientRect();
        if ((bottom > 0) && (top > 0) && (top < window.innerHeight) && (bottom < window.innerHeight)) {
            reveal.classList.add('reveal_active');
        } else {
            reveal.classList.remove('reveal_active');
        }
    });
})