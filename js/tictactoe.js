var squares = {'X':[],'O':[]},
    turn = 'X',
    winningArrays = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
    score = {'X':0,'O':0};
    gameOver = false;

function addPiece() {
  if ((this.innerHTML == "") && (gameOver !== true)){
    console.log('Adding ' + turn + ' to Square ' + this.getAttribute('id'));
    this.innerHTML = "<p>" + turn + "</p>";
    squares[turn].push(Number(this.getAttribute('id')));
    if (((squares['X'].length + squares['O'].length) < 9) && ((squares['X'].length + squares['O'].length) > 4)) {
      if (getWinner(turn)) {
        score[turn] += 1;
        console.log("X = " + score['X'] + ", O = " + score['O']);
        alert(turn + " wins! " + "X = " + score['X'] + ", O = " + score['O']);
        console.log(turn + " wins!");
        gameOver = true;
      };
    } else if ((squares['X'].length + squares['O'].length) == 9) {
      alert("Cat's Game!");
      console.log("Cat's Game!");
    }
    switch (turn) {
      case 'X':
        turn = 'O';
        break;
      case 'O':
        turn = 'X';
        break;
      default:
        alert("Sorry, I have no idea whose turn it is...");
    }
    console.log("Ready Player " + turn);
    }
  }

function getWinner(turn) {
  console.log("Checking if " + turn + " is winner");
  for (i=0; i < (winningArrays.length); i++) {
    console.log("Checking if " + squares[turn] + " contains " + winningArrays[i]);
    console.log("Squares Turn:",squares[turn]);
    if (isSuperset(squares[turn], winningArrays[i]) === true) {
      return true;
    }
  }
}

//source: "https://jsfiddle.net/ThinkingStiff/azadZ/"
function isSuperset( superset, subset ) {
  var result = superset.sort(1).toString().indexOf( subset.sort(1).toString() ) > -1;
  console.log(result);
  return result;
};

//BUGGY SUPERSET FUNCTION:
// function isSuperset(arr1, arr2) {
// //  arr1 = arr1.sort(1);
// //  arr2 = arr2.sort(1);
//   arr2.every(function(val) {
//     console.log("array2 value = " + val + ", array1 index of " + val + " = " + arr1.indexOf(val));
//     console.log("if check ----",arr1.indexOf(val));
//     if (arr1.indexOf(val) >= 0) {
//       console.log("true");
//       return true;
//     } else {
//       console.log("not true");
//       return false;
//     }
//   });
// }

function clearBoard() {
  squares = {'X':[],'O':[]};
  turn = 'X';
  for (i=0; i<9; i++) {
    document.getElementById(i+1).innerHTML = "";
  }
  gameOver = false;
}

function stopDance() {
  document.querySelector("img").src = "img/toejam_still.gif";
  document.getElementById("muzak").pause();
  document.getElementById("scratch").play();
}

// EVENT LISTENERS
// var rows = document.querySelectorAll('row');
// console.log('rows =' + rows);
// for(var i = 0; i < rows.length; i++) {
//   console.log(rows[i]);
//   rows[i].addEventListener('click', function(){
//   console.log(this);
// });
// }
//
// var nodesArray = Array.prototype.slice.call(document.querySelectorAll("row"));
// nodesArray.forEach(function(){
//   this.addEventListener('click', addPiece);
//   console.log('added event listener for ' + this)
// });

//  var element = document.getElementsByClassName('row')[i];
//  element.addEventListener("click", addPiece); //alt = function() {addPiece(i)}
//
document.getElementById("1").addEventListener("click", addPiece);
document.getElementById("2").addEventListener("click", addPiece);
document.getElementById("3").addEventListener("click", addPiece);
document.getElementById("4").addEventListener("click", addPiece);
document.getElementById("5").addEventListener("click", addPiece);
document.getElementById("6").addEventListener("click", addPiece);
document.getElementById("7").addEventListener("click", addPiece);
document.getElementById("8").addEventListener("click", addPiece);
document.getElementById("9").addEventListener("click", addPiece);

//BUTTONS
document.getElementById("reset").addEventListener("click", clearBoard);
document.getElementById("stop").addEventListener("click", stopDance);


// DEPRECATED
// document.getElementById("shutup").addEventListener("click", pauseMuzak);
// function pauseMuzak() {
//   document.getElementById("muzak").pause()
// }
