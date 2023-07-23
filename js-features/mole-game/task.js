const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

getHole = index => document.getElementById(`hole${index}`);

resetGame = message => {
    alert(message);
    dead.textContent = 0;
    lost.textContent = 0;
}

playGame = () => {
    for (let i = 1; i < 10; i++) {
        let hole = getHole(i);
        hole.onclick = () => {
            if (hole.classList.contains('hole_has-mole')) {
                dead.textContent = Number(dead.textContent) + 1;
                if (Number(dead.textContent) === 10) {
                    resetGame('You win!');
                }
            } else {
                lost.textContent = Number(lost.textContent) + 1;
                if (Number(lost.textContent) === 5) {
                    resetGame('You lost.')
                }
            }
        }
    }
}

playGame();