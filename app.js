// Represent the board as an array of arrays
let board = [];

let size = 50;

const displayBoard = document.querySelector('.board');

const renderBoard = (board) => {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const cellClass =
        document.querySelectorAll('.row')[i].children[j].classList;
      //   console.log('cell', document.querySelectorAll('.row')[i].children[j]);
      if (board[i][j] === 0 && cellClass?.contains('alive')) {
        cellClass.remove('alive');
      } else if (board[i][j] === 1) {
        cellClass.add('alive');
      }
    }
  }
};

const clickCell = (cell, row, column) => {
  //   console.log(cell);
  cell.classList.toggle('alive');
  let boardCell = board[row][column];
  if (boardCell === 0) {
    board[row][column]++;
  } else {
    board[row][column]--;
  }
  //* don't use renderBoard here as it reloads the entire board
  //   renderBoard();
  //   console.log(board);
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

//* Check surrounding cells
// 1. Any live cell with fewer than two live neighbours dies (referred to as underpopulation).
// 2. Any live cell with more than three live neighbours dies (referred to as overpopulation).
// 3. Any live cell with two or three live neighbours lives, unchanged, to the next generation.
// 4. Any dead cell with exactly three live neighbours comes to life.

const checkCell = (isCellAlive, surroundingCells) => {
  let isAlive;
  if (isCellAlive === true) {
    if (surroundingCells < 2 || surroundingCells > 3) {
      isAlive = false;
    } else {
      isAlive = true;
    }
  } else {
    if (surroundingCells === 3) {
      isAlive = true;
    } else {
      isAlive = false;
    }
  }
  return isAlive;
};

const checkBoard = (gameboard) => {
  const newBoard = [];
  gameboard.forEach((row, rowIndex) => {
    newBoard.push([]);
    row.forEach((cell, cellIndex) => {
      let livingNeighbours = 0;
      let isCellAlive = !!cell;
      if (!!gameboard?.[rowIndex - 1]?.[cellIndex - 1]) {
        livingNeighbours++;
      }
      if (!!gameboard?.[rowIndex - 1]?.[cellIndex]) {
        livingNeighbours++;
      }
      if (!!gameboard?.[rowIndex - 1]?.[cellIndex + 1]) {
        livingNeighbours++;
      }
      if (!!gameboard?.[rowIndex]?.[cellIndex - 1]) {
        livingNeighbours++;
      }
      if (!!gameboard?.[rowIndex]?.[cellIndex + 1]) {
        livingNeighbours++;
      }
      if (!!gameboard?.[rowIndex + 1]?.[cellIndex - 1]) {
        livingNeighbours++;
      }
      if (!!gameboard?.[rowIndex + 1]?.[cellIndex]) {
        livingNeighbours++;
      }
      if (!!gameboard?.[rowIndex + 1]?.[cellIndex + 1]) {
        livingNeighbours++;
      }
      if (checkCell(isCellAlive, livingNeighbours)) {
        newBoard[rowIndex][cellIndex] = 1;
      } else {
        newBoard[rowIndex][cellIndex] = 0;
      }
      //   console.log(rowIndex, cellIndex, livingNeighbours);
    });
  });
  renderBoard(newBoard);
  board = newBoard;
};

const resetBoard = () => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      board[i][j] = 0;
    }
  }
  renderBoard(board);
};

const startGame = () => {
  createBoard();
  let intervalId;
  let startingBoard;

  //* Start Button
  const startButton = document.createElement('button');
  startButton.textContent = 'start';
  startButton.addEventListener('click', () => {
    startingBoard = board;
    // console.log(startingBoard);
    intervalId = setInterval(() => checkBoard(board), 500);
  });
  document.querySelector('.controls').append(startButton);
  startingBoard = board;

  //* Stop Button
  const stopButton = document.createElement('button');
  stopButton.textContent = 'stop';
  stopButton.addEventListener('click', () => clearInterval(intervalId));
  document.querySelector('.controls').append(stopButton);

  //* Reset Button
  const resetButton = document.createElement('button');
  resetButton.textContent = 'reset';
  resetButton.addEventListener('click', () => {
    board = startingBoard;
    renderBoard(board);
  });
  document.querySelector('.controls').append(resetButton);

  //* Clear Button
  const clearButton = document.createElement('button');
  clearButton.textContent = 'clear';
  clearButton.addEventListener('click', () => resetBoard());
  document.querySelector('.controls').append(clearButton);
};

startGame();
