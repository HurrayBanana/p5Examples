//a plain global dom implemented sketch for messing with arrays 1d and 2d

//let fruits = ['Apple', 'Banana'];

let stuff = [];
let xstuff = [];


function Create1dArray(){
  stuff.push(5);
  stuff.push(7);
  stuff.push(200);
  stuff.push(150);
  stuff.push(70);
  stuff.push(80);
}



function setup() {

  create2dArray();
  createCanvas(400, 400);
}

let ypos = 20;
let dy = 1;
function texttest() {
    text(stuff[1],20,20 + ypos);
  text(stuff[2],20,40 + ypos);
  ypos += dy;
  if (ypos > 400 || ypos < 0)
    dy *= -1;
  
  //print(stuff[1]);
}

function displayAll() {
  for (let i = 0; i < stuff.length; i++) {
     text(stuff[i], 20, 20 + i * 20) ;
  }
}

function visualArray(list){
  textAlign(CENTER);
  for (let i = 0; i < list.length; i++) {
    fill(0,list[i],0);
    rect(20 + i * 30, 20, 30, 30);
    fill(255);
    text(list[i], 35 + i * 30, 35);
  }
}

function visual2dArray(list){
  textAlign(CENTER);
    for (let c = 0; c < 10; c++){
      for (let r = 0; r < 10; r++){
        fill(0, list[c][r] * 6, 0);
        rect(20 + c * 30, 20 + r * 30, 30, 30);
        fill(255);
        text(list[c][r]*6,35 + c * 30, 35 + r * 30);
      }
    }
}

function create2dArray(){
  for (let i = 0; i < 10; i++){
    let n = [];
    for (let j = 0; j < 10; j++){
      n.push(i+j);
    }
    xstuff.push(n);
  }
}
let dropy = 15;
let stepx = 25;

function show2dArray(){
  for (let c = 0; c < 10; c++){
    for (let r = 0; r < 10; r++){
      text(xstuff[c][r], 20 + c * stepx, 20 + r * dropy);
    }
  }
}


function draw() {
  background(220);
  visual2dArray(xstuff);
  //show2dArray();
  //visualArray(stuff);
  //texttest();  
  //displayAll();
  //rect(20,20,30,30);
}

