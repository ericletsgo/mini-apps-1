var board =
[
  '1', '2', '3',
  '4', '5', '6',
  '7', '8', '9'
];

var move = 1;

function init() {
  var xPlayer = prompt('Please enter name of X player');
  var oPlayer = prompt('Please enter name of O player');

  document.getElementById('xPlayer').innerHTML = 'X Player ' + xPlayer + ': ';
  document.getElementById('oPlayer').innerHTML = 'O Player ' + oPlayer + ': ';
}

function togglePiece(mouseEvent) {
  var id = mouseEvent.path[0].id;

  if (move % 2 !== 0) {
    board[board.indexOf(id)] = 'X';
    document.getElementById(id.toString()).innerHTML = 'X';
    move++;
    checkWinCondition('X');
  } else {
    board[board.indexOf(id)] = 'O';
    document.getElementById(id.toString()).innerHTML = 'O';
    move++;
    checkWinCondition('O');
  }
  checkStalemate();
}

function reset() {
  board =
  [
    '1', '2', '3',
    '4', '5', '6',
    '7', '8', '9'
  ];
  move = 1;
  for (var i = 1; i < 10; i++) {
    document.getElementById(i.toString()).innerHTML = '';
  }
}

function checkWinCondition(player) {
  for (var i = 0; i < board.length; i++) {
    if (board[i] === board[i + 3] && board[i] === board[i + 6]) {
      winCounter(player);
      setTimeout(function() {alert(player + ' Wins!'); }, 500);
      setTimeout(function() {reset()}, 1000);
    }
    if (board[i] === board[i + 1] && board[i] === board[i + 2]) {
      winCounter(player);
      setTimeout(function() {alert(player + ' Wins!'); }, 500);
      setTimeout(function() {reset()}, 1000);
    }
  }
  if (board[0] === board[4] && board[0] === board[8]) {
    winCounter(player);
    setTimeout(function() {alert(player + ' Wins!'); }, 500);
    setTimeout(function() {reset()}, 1000);
  }
  if (board[2] === board[4] && board[2] === board[6]) {
    winCounter(player);
    setTimeout(function() {alert(player + ' Wins!'); }, 500);
    setTimeout(function() {reset()}, 1000);
  }
}

function checkStalemate() {
  if (move === 10) {
    setTimeout(function() {alert('Stalemate!')}, 500);
    setTimeout(function() {reset()}, 1100);
  }
}

function winCounter(player) {
  xWinCount = document.getElementById(player).innerHTML;
  oWinCount = document.getElementById(player).innerHTML;

  if (player === 'X') {
    xWinCount++;
    document.getElementById(player).innerHTML = xWinCount;
  } else {
    oWinCount++;
    document.getElementById(player).innerHTML = oWinCount;
  }
}

for (var i = 1; i < 10; i++) {
  document.getElementById(i.toString()).addEventListener('click', togglePiece);
}
document.getElementById('reset').addEventListener('click', reset);
