// Represent the board as an array of arrays
const board = [];

let size = 50;

const displayBoard = document.querySelector('.board');

const renderBoard = () => {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const cellClass =
        document.querySelectorAll('.row')[i].children[j].classList;
      console.log('cell', document.querySelectorAll('.row')[i].children[j]);
      if (board[i][j] === 0 && cellClass.contains('alive')) {
        cellClass.remove('alive');
      } else if (board[i][j] === 1) {
        cellClass.add('alive');
      }
    }
  }
};

const clickCell = (cell, row, column) => {
  console.log(cell);
  cell.classList.toggle('alive');
  let boardCell = board[row][column];
  if (boardCell === 0) {
    board[row][column]++;
  } else {
    board[row][column]--;
  }
  //* don't use renderBoard here as it reloads the entire board
  //   renderBoard();
  console.log(board);
};

const createBoard = () => {
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
};

const startGame = () => {
  createBoard();
};

startGame();
