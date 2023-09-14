const input = document.getElementById('task__input')
const tasksList = document.getElementById('tasks__list')
const form = document.getElementById('tasks__form')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (input.value.trim() != '') {
        newTaskElem = `
            <div class="task">
                <div class="task__title">
                    ${input.value}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>`;
        tasksList.insertAdjacentHTML('beforeEnd', newTaskElem)
        let newTask = tasksList.lastElementChild
        let removeBtn = tasksList.lastElementChild.querySelector('.task__remove')
        removeBtn.addEventListener('click', (event) => {
            event.preventDefault();
            newTask.remove()
        })

        input.value = '';
    }
})