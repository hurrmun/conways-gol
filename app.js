// Represent the board as an array of arrays
const board = [];

let size = 50;

const displayBoard = document.querySelector('.board');

for (let i = 0; i < size; i++) {
  const row = document.createElement('div');
  row.classList.add('row');

  displayBoard.appendChild(row);
  const currentRow = document.querySelectorAll('.row')[i];
  for (let j = 0; j < size; j++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');

    currentRow.appendChild(cell);
  }
}
