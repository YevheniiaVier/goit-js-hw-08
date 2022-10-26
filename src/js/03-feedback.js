import throttle from 'lodash.throttle';

const FORM_KEY = 'feedback-form-state';
const formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInputChange, 500));

updateOutput();

function onInputChange(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(FORM_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(FORM_KEY);
  console.log(formData);
}

// function updateOutput() {

//     const savedData = JSON.parse(localStorage.getItem(FORM_KEY));
//     if (savedData) {
//       refs.input.value = savedData.email || '';
//       refs.textarea.value = savedData.message || '';

// }

function updateOutput() {
  try {
    const savedData = JSON.parse(localStorage.getItem(FORM_KEY));
    if (savedData) {
      refs.input.value = savedData.email || '';
      refs.textarea.value = savedData.message || '';
    }
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}
