import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

const LOCALSTORAGE_KEY = 'feedback-form-state';

let dataImput = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};

form.addEventListener('submit', onSubmitForm);
form.addEventListener('input', onImputForm);
onSaveDataInput();

function onImputForm() {
  dataImput.email = email.value;
  dataImput.message = message.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dataImput));
}

function onSubmitForm(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
  console.log(dataImput);
}

function onSaveDataInput() {
  const saveData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (saveData) {
    email.value = saveData.email;
    message.value = saveData.message;
  }
}