
// https://ru.hexlet.io/code_reviews/993320

export default () => {
    // BEGIN (write your solution here)
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const nav = button.closest('.row');
        const activeButtons = nav.querySelectorAll('.active');
        activeButtons.forEach((activeButton) => {
          activeButton.classList.remove('active'); 
        })
        const newTabId = button.dataset.bsTarget
        const newTab = nav.querySelector(newTabId)
        newTab.classList.add('active');
        button.classList.add('active');
      });
    });
    // END
  };