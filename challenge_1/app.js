var board =
[
  [0, 0], [0, 1], [0, 2],
  [1, 0], [1, 1], [1, 2],
  [2, 0], [2, 1], [2, 2]
];

function togglePiece() {
  var move = 1;
  if (move % 2 !== 0) {

    move++;
  } else {

    move++;
  }
  checkWinCondition();
}

function reset() {
  board =
  [
    [0, 0], [0, 1], [0, 2],
    [1, 0], [1, 1], [1, 2],
    [2, 0], [2, 1], [2, 2]
  ];
}

function checkWinCondition(startingPoint) {

}

function checkStalemate() {

}

document.getElementById('grid').addEventListener('click', togglePiece);
document.getElementById('reset').addEventListener('click', reset);
