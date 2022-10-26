import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
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
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
}

function updateOutput() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  const parsedSavedData = JSON.parse(savedData);
  console.log(parsedSavedData);
  //   if (parsedSavedData) {
  //     refs.input.value = parsedSavedData.email || '';
  //     refs.textarea.value = parsedSavedData.message || '';
  //   }
}

// function updateOutput() {
//   try {
//     const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
//     if (savedData) {
//       refs.input.value = savedData.email || '';
//       refs.textarea.value = savedData.message || '';
//     }
//   } catch (error) {
//     console.error('Get state error: ', error.message);
//   }
// }
