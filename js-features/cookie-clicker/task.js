const count = document.getElementById('clicker__counter')
const img = document.getElementById('cookie')

img.onclick = () => {
    count.textContent = Number(count.textContent) + 1
    if (Number(count.textContent) % 2 == 0) {
        img.width += 20
        img.height += 20
    } else {
        img.width -= 20
        img.height -= 20
    }
}