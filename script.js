// //* Variables //

// const boardSize = 5;
// let playerBoard = generateEmptyBoard();
// let computerBoard = generateEmptyBoard();
// let playerShips = [5, 4, 3, 3, 2];
// let computerShips = [5, 4, 3, 3, 2];
// let currentPlayer = "player";

// //* the playing Board generator //
// function emptyBoard() {
//   const board = [];
//   for (let x = 0; x < boardSize; x++) {
//     board[x] = [];
//     for (let y = 0; y < boardSize; y++) {
//       board[x][y] = 0; // 0 represents an empty cell
//     }
//   }
//   return board;
// }

// function generateEmptyBoard(board, elementId, clickHandler) {
//   const table = document.getElementById(elementId);
//   table.innerHTML = " ";
//   table.classList.add("container");

//   for (let i = 0; i < boardSize; i++) {
//     const row = document.createElement("tr");
//     table.classList.add("container");

//     for (let j = 0; j < boardSize; j++) {
//       const cell = document.createElement("td");
//       cell.dataset.row = i;
//       cell.dataset.col = j;
//       cell.addEventListener("click", clickHandler);
//       if (board[i][j] > 0) {
//         cell.classList.add("ship");
//       }
//       row.appendChild(cell);
//     }
//     table.appendChild(row);
//   }
//   console.log(table.outerHTML);
// }

// function handleCellClick(event) {
//   if (currentPlayer === "player") {
//     const row = parseInt(event.target.dataset.row);
//     const col = parseInt(event.target.dataset.col);
//     if (computerBoard[row][col] === 0) {
//       const isHit = computerBoard[row][col] > 0;
//       event.target.classList.add(isHit ? "hit" : "miss");
//       playerBoard[row][col] = isHit ? -1 : 1;

//       //! why is currentplayer = computer? //

//       currentPlayer = "computer";
//       setTimeout(computerTurn, 1000);
//     }
//   }
// }

// function computerTurn() {
//   const row = Math.floor(Math.random() * boardSize);
//   const col = Math.floor(Math.random() * boardSize);

//   if (playerBoard[row][col] === 0) {
//     const isHit = computerBoard[row][col] > 0;
//     cell.classList.add(isHit ? "hit" : "miss");
//     computerBoard[row][col] = isHit ? -1 : 1;
//     currentPlayer = "player";
//   } else {
//     computerTurn();
//   }
// }

// //* Ship placement
// function placeShips(board, ships) {
//   for (let shipSize of ships) {
//     placeShips(board, shipSize);
//   }
// }

// function placeShip(board, size) {
//   const orientation = Math.random() < 0.5 ? "horizontal" : "vertical";
//   let row, col;

//   if (orientation === "horizontal") {
//     row = Math.floor(Math.random() * boardSize);
//     col = Math.floor(Math.random() * (boardSize - size + 1));
//   } else {
//     row = Math.floor(Math.random() * (boardSize - size + 1));
//     col = Math.floor(Math.random() * boardSize);
//   }
//   for (let i = 0; i < size; i++) {
//     if (orientation === "horizontal") {
//       board[row][col + i] = size;
//     } else {
//       board[row + i][col] = size;
//     }
//   }
// }

// function renderBoards() {
//   generateEmptyBoard(playerBoard, "playerBoard", handleCellClick);
//   generateEmptyBoard(computerBoard, "computerBoard", () => {}); // No click handler for the computer board
// }

// placeShips(playerBoard, playerShips);
// placeShips(computerBoard, computerShips);
// renderBoards();

//* Variables //
let boardsize = 3; //preset to 3 first at the start.

//for the board//
const playerBoard = document.getElementById("playerBoard");
const computerBoard = document.getElementById("computerBoard");
const playerGrid = document.querySelector("#playerboard");
const computerGrid = document.querySelector("#computerBoard");
//ships
const bigShipPreview = document.getElementById("#bigShip");
const midShipPreview = document.getElementById("#midShip");
const smlShipPreview = document.getElementById("#smlShip");

//? const grid = document.querySelector(".grid"); //
// referance from https://jsfiddle.net/pf4gbm4L/
//*Generating a board

function drawGrid(cells, container) {
  //clear container before drawing a new grid.
  container.innerHTML = "";
  //adjust cell size
  const cellSize = 195 / cells;

  for (let i = 0; i < cells; i++) {
    let row = document.createElement("div");
    row.classList.add("rowa");

    for (let j = 0; j < cells; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cella");
      cell.style.width = cellSize + "px";
      cell.style.height = cellSize + "px";
      cell.appendChild(document.createTextNode("\u00A0"));

      row.appendChild(cell);
    }
    container.appendChild(row);
  }
}

document.getElementById("selectGrid").addEventListener("change", function () {
  boardsize = parseInt(this.value, 10);
  //draw new board
  drawGrid(boardsize, playerBoard);
  drawGrid(boardsize, computerBoard);
});

drawGrid(boardsize, playerBoard);
drawGrid(boardsize, computerBoard);

//!End of Board creation //

//* Ship Placement  //

function shipPlacement(ship) {
  for (let i = 0; i < ship.boardsize; i++);
  const shipblock = document.querySelectorAll(
    
  );
}
