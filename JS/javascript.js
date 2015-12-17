var record = [];
var a;
var out = []

function title() {

  var ctx = document.getElementById('my_canvas').getContext('2d');
  ctx.fillStyle = "rgba(235, 33, 33, 0.72)";
  ctx.shadowColor = "#000";
  ctx.lineWidth = "1";
  ctx.strokeStyle = "black";
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowBlur = 3;
  ctx.font = "bold 100px Ariel";
  ctx.fillText("Bingo!", 690, 100);
  ctx.strokeText("Bingo!", 690, 100);

}

function randomNum() {

  a = Math.floor((Math.random() * 90) + 1);

  for (i = 1; i < record.length; i++) {

    if (a == record[i]) {
      randomNum()
    }

  }

  record.push(a)

  printNum();

}

randomNum();

function call() { // Removes duplicate values from passed in arrays

  out = [];

  var t,

    len = record.length

  obj = {};

  for (t = 0; t < len; t++) {
    obj[record[t]] = 0;
  }

  for (t in obj) {
    out.push(parseInt(t));
  }

  printCall(out)
}

function printNum() {
    
  e = '';
  d = '';  
  b = a%10;
  c = Math.floor(a/10);
  if (c == 0){
      c = ''
  }
  
  if (b == 6){
      d = 'Six'
  }
  if (b == 9){
      d = 'Nine'
  }

  if (c == 6){
      e = 'Six'
  }
  if (c == 9){
      e = 'Nine'
  }

    
  var ctx = document.getElementById('my_canvas').getContext('2d');
  ctx.clearRect(600, 350, 500, 300)
  ctx.fillStyle = "#000";
  ctx.shadowColor = "#000";
  ctx.lineWidth = "1";
  ctx.strokeStyle = "black";
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowBlur = 3;
  ctx.font = "300px Ariel";
  ctx.fillText(b, 840, 600);
  ctx.strokeText(b, 840, 600);
  ctx.fillStyle = "red";
  ctx.shadowColor = "red";
  ctx.strokeStyle = "red";
  ctx.fillText(c, 700, 600);
  ctx.strokeText(c, 700, 600);
  ctx.font = "50px Ariel";
  ctx.fillStyle = "green";
  ctx.shadowColor = "green";
  ctx.lineWidth = "1";
  ctx.strokeStyle = "green";
  ctx.fillText(d, 1000, 600);
  ctx.strokeText(d, 1000, 600);
  ctx.font = "50px Ariel";
  ctx.fillStyle = "green";
  ctx.shadowColor = "green";
  ctx.lineWidth = "1";
  ctx.strokeStyle = "green";
  ctx.fillText(e, 600, 600);
  ctx.strokeText(e, 600, 600);

}

function printCall(rec) {
/*
  var ctx = document.getElementById('my_canvas').getContext('2d');
  ctx.clearRect(10, 760, 1700, 50)
  ctx.fillStyle = "#000";
  ctx.shadowColor = "#000";
  ctx.lineWidth = "1";
  ctx.strokeStyle = "black";
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowBlur = 3;
  ctx.font = "20px Ariel";
  ctx.fillText(rec, 10, 800);
  ctx.strokeText(rec, 10, 800);
  */
    alert(rec)
}

window.onload = title;