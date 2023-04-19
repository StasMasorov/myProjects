// https://ru.hexlet.io/code_reviews/993644


const generateField = () => {
  const tableEl = document.createElement('table');

  tableEl.className = 'table-bordered';
  for (let i = 0; i < 3; i += 1) {
    const row = tableEl.insertRow();
    for (let j = 0; j < 3; j += 1) {
      const cell = row.insertCell();
      cell.className = 'py-2 px-3';
      cell.innerHTML = '<span class="invisible">s</span>';
    }
  }
  return tableEl;

};

// BEGIN (write your solution here)
export default function () {
  const table = generateField();
  const root = document.querySelector('.root')
  root.prepend(table);
  const fields = document.querySelectorAll('td');
  let i = 1;
  fields.forEach((field) => {
    field.addEventListener('click', (e) => {
      if (e.target.textContent === 'o' || e.target.textContent === 'x') {
        i += 1;
        return;
      }
      i % 2 === 0 ? e.target.textContent = 'o' : e.target.textContent = 'x';
      i += 1;
    })
  })
}
// END
