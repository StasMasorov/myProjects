// https://ru.hexlet.io/code_reviews/993476


import { htmlEscape } from 'escape-goat';

export default function () {
  
  const form = document.querySelector('.feedback-form');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();

  let formData = new FormData(e.target);

  let email = htmlEscape(formData.get('email'));
  let name = htmlEscape(formData.get('name'));
  let comment = htmlEscape(formData.get('comment'));

  let html = 
   `<div>
      <p>Feedback has been sent</p>
      <div>Email: ${email}</div>
      <div>Name: ${name}</div>
      <div>Comment: ${comment}</div>
    </div>`;

  form.innerHTML = html;
  });
};