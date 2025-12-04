const TOKEN = '8398343220:AAGTPxnWB9QD8GsgxFwwqUtKJWdnJfN8ACs'
const CHAT_ID = '-5042754759';
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const succes = document.querySelector('.succes'),

document.getElementById('form').addEventListener('submit', function(e) {

e.preventDefault();I

let massage= 'Заявка с сайта/n' + 'Имя: ' + this.neme.value + '/n' + 
'Номер телефона: ' + this.phone.value;

axios.post(URL_API, {
    chat_id: CHAT_ID,
    parse_mode: html,
    text: massage
})
.then((res) => {
    succes.classList.remove('disp');
})
.catch((err) => {
    console.warn(err);
})
.finally(() => {
    console.log('Скрипт выполнен');
})

})