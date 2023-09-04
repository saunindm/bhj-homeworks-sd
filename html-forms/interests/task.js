const checkboxes = document.getElementsByClassName('interest__check')

for (let interest of checkboxes) {
    const subInterests = interest.closest('.interest').querySelectorAll('.interest__check');
    interest.addEventListener('change', () => {
    if (interest.checked) {
        for (let subInterest of subInterests) {
            subInterest.checked = true;
            }
        } else {
            for (let subInterest of subInterests) {
                subInterest.checked = false;
            }
        }
    })
}