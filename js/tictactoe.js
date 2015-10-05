var squares = {'X':[],'O':[]},
    turn = 'X',
    winningArrays = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

var square = '';
function addPiece(square) {
  squares[turn].push(square[2]);
  document.getElementById(square).innerHTML = "<p>" + turn + "</p>";
  getWinner();
  switch (turn) {
    case 'X':
      turn = 'O';
      break;
    case 'O':
      turn = 'X';
      break;
    default:
      console.log("Sorry, I have no idea whose turn it is...");
  }
}

// function drawPieces() {
//
// }

function getWinner() {
  if ((squares['X'].length + squares['O'].length) < 9) {
    for (i=0; i < (winningArrays.length - 1); i++) {
      if (isSuperset(squares[turn], winningArrays[i])) {
        console.log(turn + " wins!");
      }
    }
  } else {
      console.log("Cat's Game!")
  }
}

var arr1 = [];
var arr2 = [];

function isSuperset(arr1, arr2) {
  arr2.every(function (val) {
    return arr1.indexOf(val) >= 0; });
}

function clearBoard() {
  squares = {'X':[],'O':[]};
  turn = 'X';
  for (i=0; i<9; i++) {
    document.getElementById("r"+i).innerHTML = "";
  }
}

function stopDance() {
  document.querySelector("img").src = "img/toejam_still.gif";
  document.getElementById("muzak").pause();
  document.getElementById("scratch").play();
}

// EVENT LISTENERS
for (i=1; i<=9; i++) {
  document.getElementById("r"+i).addEventListener("click", function() {addPiece("r"+i)});
}
// document.getElementById("1").addEventListener("click", addPiece(1));
// document.getElementById("2").addEventListener("click", addPiece(2));
// document.getElementById("3").addEventListener("click", addPiece(3));
// document.getElementById("4").addEventListener("click", addPiece(4));
// document.getElementById("5").addEventListener("click", addPiece(5));
// document.getElementById("6").addEventListener("click", addPiece(6));
// document.getElementById("7").addEventListener("click", addPiece(7));
// document.getElementById("8").addEventListener("click", addPiece(8));
// document.getElementById("9").addEventListener("click", addPiece(9));
document.getElementById("reset").addEventListener("click", clearBoard);
document.getElementById("stop").addEventListener("click", stopDance);


// DEPRECATED
// document.getElementById("shutup").addEventListener("click", pauseMuzak);
// function pauseMuzak() {
//   document.getElementById("muzak").pause()
// }
