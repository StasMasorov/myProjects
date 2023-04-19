export default () => {
    // BEGIN (write your solution here)
    const button = document.querySelector('#alert-generator');
    const div = document.querySelector('.alerts');
    let i = 1;
    button.addEventListener('click', () => {
      const newDiv = document.createElement('div');
      newDiv.classList = 'alert alert-primary';
      newDiv.textContent = `Alert ${i}`;
      div.prepend(newDiv);
      i += 1;
    });
    // END
  };
  