import "./styles.css";
let turn = "X";
if (document.readyState !== "loading") {
  // Document ready, executing
  console.log("Document ready, executing");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    // Document was not ready, executing when loaded
    console.log("Document ready, executing after a wait");
    initializeCode();
  });
}

function initializeCode() {
  console.log("Initializing");

  // table

  //  let table = document.getElementById("board");
  let i = 0;
  let j = 0;

  let x = 0;
  let y = 0;

  let grid = [];
  let ids = 0;
  let container = document.getElementById("container");

  for (j = 0; j < 5; j++) {
    grid[j] = [];

    let row = document.createElement("div");
    row.className = "row";
    //

    // let row = table.insertRow();

    for (i = 0; i < 5; i++) {
      grid[j][i] = 0;

      // let cell = row.insertCell();
      let cell = document.createElement("div");
      cell.className = "col s1";
      cell.id = ids;
      //cell.innerHTML = ids.toString();
      ids++;
      row.appendChild(cell);

      //let number = parseInt(cell.id);
      cell.addEventListener("click", function () {
        changePlayer();

        if (cell.innerHTML !== "X" && cell.innerHTML !== "O") {
          if (turn === "X") {
            cell.className = "x";
            cell.innerHTML = turn;
            turn = "O";

            // x = cell.parentNode.rowIndex;
            //  y = cell.cellIndex;

            //   x = (number % 5) - 1;
            //   y = number / 5;
            //   grid[x][y] = 1;

            // winning

            if (
              (grid[x][0] === 1 &&
                (grid[x][1] === 1) &
                  (grid[x][2] === 1) &
                  (grid[x][3] === 1) &
                  (grid[x][4] === 1)) ||
              (grid[0][y] === 1 &&
                (grid[1][y] === 1) &
                  (grid[2][y] === 1) &
                  (grid[3][y] === 1) &
                  (grid[4][y] === 1)) ||
              (grid[0][0] === 1 &&
                (grid[1][1] === 1) &
                  (grid[2][2] === 1) &
                  (grid[3][3] === 1) &
                  (grid[4][4] === 1)) ||
              (grid[0][4] === 1 &&
                (grid[1][3] === 1) &
                  (grid[2][2] === 1) &
                  (grid[3][1] === 1) &
                  (grid[4][0] === 1))
            ) {
              alert("Player 1 won!");
            }
          } else {
            cell.className = "o";
            cell.innerHTML = turn;
            turn = "X";

            //  x = column.parentNode.rowIndex;
            //   y = column.cellIndex;
            grid[x][y] = 2;
            if (
              (grid[x][0] === 2 &&
                (grid[x][1] === 2) &
                  (grid[x][2] === 2) &
                  (grid[x][3] === 2) &
                  (grid[x][4] === 2)) ||
              (grid[0][y] === 2 &&
                (grid[1][y] === 2) &
                  (grid[2][y] === 2) &
                  (grid[3][y] === 2) &
                  (grid[4][y] === 2)) ||
              (grid[0][0] === 2 &&
                (grid[1][1] === 2) &
                  (grid[2][2] === 2) &
                  (grid[3][3] === 2) &
                  (grid[4][4] === 2)) ||
              (grid[0][4] === 2 &&
                (grid[1][3] === 2) &
                  (grid[2][2] === 2) &
                  (grid[3][1] === 2) &
                  (grid[4][0] === 2))
            ) {
              alert("Player 2 won!");
            }
          }
        } else {
          alert("Outch");
        }
      });
      container.appendChild(row);
    }
  }

  // progressbar

  var intervalHandler;
  var timeoutHandler;
  var elem = document.getElementById("myBar");

  function changePlayer() {
    let playerTurnTime = 10000;
    window.clearTimeout(timeoutHandler);
    clearInterval(intervalHandler);

    var width = 0;
    intervalHandler = setInterval(frame, playerTurnTime / 10);
    timeoutHandler = window.setTimeout(function () {
      if (turn === "X") {
        turn = "O";
      } else {
        turn = "X";
      }
      changePlayer();
    }, playerTurnTime);

    function frame() {
      width += 10;
      elem.style.width = width + "%";
      elem.innerHTML = width + "%";
    }
  }
}
