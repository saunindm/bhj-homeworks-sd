const count = document.getElementById('timer');

let timer = setInterval(() => {
    count.textContent = Number(count.textContent) - 1
    if (Number(count.textContent) === 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(timer);
    }
}, 1000)