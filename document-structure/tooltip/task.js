const hasTooltips = document.querySelectorAll('.has-tooltip')

console.log(hasTooltips)

for (const href of hasTooltips) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.innerText = href.title;

    href.insertAdjacentElement('afterEnd', tooltip)
    
    href.addEventListener('click', (event) => {
        event.preventDefault();

        tooltip.classList.toggle('tooltip_active')

        let position = href.getBoundingClientRect();
        tooltip.style.left = position.left + "px";
        tooltip.style.top = position.top - 30 + "px";
    })

    
}