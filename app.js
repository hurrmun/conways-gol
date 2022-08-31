// Represent the board as an array of arrays
const board = [];

let size = 50;

const displayBoard = document.querySelector('.board');

const clickCell = (cell, row, column) => {
  console.log(cell);
  cell.classList.toggle('alive');
  let boardCell = board[row][column];
  if (boardCell === 0) {
    board[row][column]++;
  } else {
    board[row][column]--;
  }
  console.log(board);
};

for (let i = 0; i < size; i++) {
  const row = document.createElement('div');
  row.classList.add('row');

  board.push([]);
  displayBoard.appendChild(row);
  const currentRow = document.querySelectorAll('.row')[i];
  for (let j = 0; j < size; j++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('click', () => clickCell(cell, i, j));

    board[i].push(0);
    currentRow.appendChild(cell);
  }
}

console.log(board);
