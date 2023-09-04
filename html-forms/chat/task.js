const openChat = document.querySelector('.chat-widget__side')
const chatWidget = document.querySelector('.chat-widget')
const chatMessages = document.querySelector('.chat-widget__messages');
const input = document.getElementById('chat-widget__input')

const answers = [
    'Вы не купили ни одного товара для того, чтобы так с нами разговаривать!',
    'Кто тут?',
    'Где ваша совесть?',
    'К сожалению, все операторы сейчас заняты. Не пишите нам больше',
    'Добрый день! До свидания!',
    'Мы ничего не будем вам продавать!',
];

openChat.addEventListener('click', () => chatWidget.classList.add('chat-widget_active'))

input.addEventListener('keydown', (event) => {

    if (event.code === "Enter" && input.value.trim() != '') {
        const i = Math.floor(Math.random() * answers.length);
        const hours = ("0" + new Date().getHours()).slice(-2);
        const minutes = ("0" + new Date().getMinutes()).slice(-2);
        chatMessages.innerHTML += `
			<div class="message message_client">
                <div class="message__time">${hours}:${minutes}</div>
				<div class="message__text">${input.value}</div>
			</div>  
			<div class="message">
                <div class="message__time">${hours}:${minutes}</div>
				<div class="message__text">${answers[i]}</div>
			</div>`;
        input.value = '';
    }
});