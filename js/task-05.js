// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".
// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const inputField = document.querySelector('#name-input');
const outputfield = document.querySelector('#name-output');

function onInputChange(event) {
  console.log(event.currentTarget.value);
  if (event.currentTarget.value.trim() === '') {
    outputfield.textContent = 'Anonymous';
  } else {
    outputfield.textContent = event.currentTarget.value.trim();
  }
}
inputField.addEventListener('input', onInputChange);