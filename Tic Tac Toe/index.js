let box1 = document.querySelector("#box1");
let box2 = document.querySelector("#box2");
let box3 = document.querySelector("#box3");
let box4 = document.querySelector("#box4");
let box5 = document.querySelector("#box5");
let box6 = document.querySelector("#box6");
let box7 = document.querySelector("#box7");
let box8 = document.querySelector("#box8");
let box9 = document.querySelector("#box9");
let info = document.querySelector("#info");
let img = document.querySelector("#img");
let container = document.querySelector("#container");
let turnmusic = new Audio("templates/turn_music.wav");

//function game logic

let count = 1;
function run(control) {
  if (
    document.getElementById(control.id).innerHTML != "" ||
    info.innerHTML == "Player X wins" ||
    info.innerHTML == "Player O wins"
  ) {
    return;
  }
  if (count <= 9) {
    if (count % 2) {
      document.getElementById(control.id).innerHTML = "X";
      document.getElementById(control.id).style.color = "red";
      info.innerHTML = "Turn for O";
      turnmusic.play();
      checkwin();
    } else {
      document.getElementById(control.id).innerHTML = "O";
      document.getElementById(control.id).style.color = "#4287f5";
      info.innerHTML = "Turn for X";
      turnmusic.play();
      checkwin();
    }
  }
  if (count == 9) {
    info.innerHTML = "Match Draw";
  }
  count++;
}

// reset button

function reset() {
  for (let i = 1; i <= 9; i++) {
    document.getElementById("box" + i).innerHTML = "";
  }
  info.innerHTML = "Click to Start...";
  count = 1;
  img.style.display = "none";
}

// function win logic

function putdata(div1, div2, div3) {
  if (
    div1.innerHTML == div2.innerHTML &&
    div2.innerHTML == div3.innerHTML &&
    div3.innerHTML == "X"
  ) {
    info.innerHTML = "Player X wins";
    img.style.display = "block";
  } else if (
    div1.innerHTML == div2.innerHTML &&
    div2.innerHTML == div3.innerHTML &&
    div3.innerHTML == "O"
  ) {
    info.innerHTML = "Player O wins";
    img.style.display = "block";
  }
}
function checkwin() {
  putdata(box1, box2, box3);
  putdata(box4, box5, box6);
  putdata(box7, box8, box9);
  putdata(box1, box4, box7);
  putdata(box2, box5, box8);
  putdata(box3, box6, box9);
  putdata(box1, box5, box9);
  putdata(box3, box5, box7);
}
