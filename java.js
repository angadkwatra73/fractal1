let canvas = document.querySelector("canvas");
console.log(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext("2d");

// c.fillRect(100, 100, 100, 100);

//TRianlge co ordinates//
c.beginPath();
c.arc(100, 100, 4, 0, 2 * Math.PI);
c.stroke();
c.fillStyle = "red";
c.fill();

c.beginPath();
c.arc(600, 100, 4, 0, 4 * Math.PI);
c.stroke();
c.fillStyle = "red";
c.fill();

c.beginPath();
c.arc(100, 500, 4, 0, 2 * Math.PI);
c.stroke();
c.fillStyle = "red";
c.fill();

// let x = Math.floor(Math.random() * 500 + 100);
// let y = Math.floor(Math.random() * 400 + 100);
// c.beginPath();
// c.arc(x, y, 4, 0, 2 * Math.PI);
// c.stroke();
// c.fillStyle = "black";
// c.fill();

//     c.beginPath();
//     c.arc(300 + 20i,200+30i, 4, 0, 2 * Math.PI);
//     c.stroke();
//     c.fillStyle = "black";
//     c.fill();

c.beginPath();

c.moveTo(100, 100);
c.lineTo(100, 500);
c.strokeStyle = "red";
c.stroke();

c.lineTo(600, 100);
c.lineTo(100, 100);
c.strokeStyle = "rgba(45,67,89,0.8)";
c.stroke();
let x = Math.floor(Math.random() * 500 + 100);
let y = Math.floor(Math.random() * 400 + 100);

c.beginPath();
c.arc(x, y, 0.05, 0, 2 * Math.PI);
c.stroke();
c.fillStyle = "green";
c.fill();

const vertex = function () {
  let rand = Math.floor(Math.random() * 3 + 1);

  return rand;
};

for (let i = 1; i <= 50000; i++) {
  let rand = vertex();
  if (rand == 1) {
    x = (x + 100) / 2;
    y = (y + 100) / 2;

    c.beginPath();
    c.arc(x, y, 0.05, 0, 2 * Math.PI);
    c.stroke();
    c.fillStyle = "pink";
    c.fill();
  } else if (rand == 2) {
    x = (x + 600) / 2;
    y = (y + 100) / 2;

    c.beginPath();
    c.arc(x, y, 0.05, 0, 2 * Math.PI);
    c.stroke();
    c.fillStyle = "yellow";
    c.fill();
  } else {
    x = (x + 100) / 2;
    y = (y + 500) / 2;

    c.beginPath();
    c.arc(x, y, 0.05, 0, 2 * Math.PI);
    c.stroke();
    c.fillStyle = "white";
    c.fill();
  }
}
