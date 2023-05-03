import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput() {
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

document.addEventListener('DOMContentLoaded', () => {
  const stateJSON = localStorage.getItem(STORAGE_KEY);
  if (stateJSON) {
    const state = JSON.parse(stateJSON);
    emailInput.value = state.email || '';
    messageInput.value = state.message || '';
  }
});

form.addEventListener('submit', onSumbit);

function onSumbit(event) {
  event.preventDefault();

  console.log(emailInput.value);
  console.log(messageInput.value);

  localStorage.removeItem(STORAGE_KEY);
  emailInput.value = '';
  messageInput.value = '';
}
