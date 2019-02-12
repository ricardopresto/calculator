
var one = document.getElementById('one');
var two = document.getElementById("two");
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var zero = document.getElementById('zero');
var dot = document.getElementById('dot');
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var mult = document.getElementById('mult');
var div = document.getElementById('div');
var equals = document.getElementById('equals');
var clear = document.getElementById('clear');
var display = document.getElementById('display');


one.addEventListener('click', numkey);
two.addEventListener('click', numkey);
three.addEventListener('click', numkey);
four.addEventListener('click', numkey);
five.addEventListener('click', numkey);
six.addEventListener('click', numkey);
seven.addEventListener('click', numkey);
eight.addEventListener('click', numkey);
nine.addEventListener('click', numkey);
zero.addEventListener('click', numkey);
dot.addEventListener('click', dotkey);
plus.addEventListener('click', pluskey);
minus.addEventListener('click', minuskey);
mult.addEventListener('click', multkey);
div.addEventListener('click', divkey);
equals.addEventListener('click', equalskey);
clear.addEventListener('click', clearkey);

var fkey = false;
var input1 = '';
var input2 = '';
var func = '';
var result;

var buttons = document.getElementsByClassName("btn");

for(var i = 0; i < buttons.length; i++){
  buttons[i].addEventListener("mousedown", press);
  buttons[i].addEventListener("mouseup", release);
}

var funcbuttons = document.getElementsByClassName("func");

for(var i = 0; i < funcbuttons.length; i++){
  funcbuttons[i].addEventListener("mousedown", press);
  funcbuttons[i].addEventListener("mouseup", funcrelease);
}

function press() {
  this.style.boxShadow='none';
}

function release() {
  this.style.boxShadow='5px 5px 10px rgb(53, 55, 173)';
}

function funcrelease() {
  this.style.boxShadow='5px 5px 10px rgb(245, 24, 24)';
}

function numkey() {
  if (fkey == false) {
  input1 = input1 + this.textContent;
  }
  else {
  input2 = input2 + this.textContent;
  }
  updateDisplay();
}

function dotkey() {
  if (fkey == false && input1.includes('.') == false) {
  if (input1 == '') { input1 = '0'};
  input1 = input1 + '.';
  }
  else {
  if (input2.includes('.') == false) {
  if (input2 == '') { input2 = '0'};
  input2 = input2 + '.';} 
  }
  //updateDisplay();
}

function pluskey() {
if (fkey == false) {
  fkey = true;
  func = 'plus';
  input1 = display.textContent;
  }
  else {
  secondfunction();
  } 
  func = 'plus';
 }
 

function minuskey() {
if (fkey == false) {
  fkey = true;
  func = 'minus';
  input1 = display.textContent;
  }
  else {
  secondfunction();
  }
  func = 'minus';
 } 

function multkey() {
if (fkey == false) {
  fkey = true;
  func = 'mult';
  input1 = display.textContent;
  }
  else {
  secondfunction();
  }
  func = 'mult';
 }

 function divkey() {
if (fkey == false) {
  fkey = true;
  func = 'div';
  input1 = display.textContent;
  }
  else {
  secondfunction();
  }
  func = 'div';
 }

function equalskey() {
  if (func == 'plus') {
  result = Number(input1) + Number(input2);
  reset();
  }
  if (func == 'minus') {
  result = Number(input1) - Number(input2);
  reset();
  }
  if (func == 'mult') {
  result = Number(input1) * Number(input2);
  reset();
  }
  if (func == 'div') {
  result = Number(input1) / Number(input2);
  reset();
  }
}

function clearkey() {
  input1 = '';
  input2 = '';
  fkey = false;
  display.textContent = '0';

}

function updateDisplay() {
  if (fkey == false) {
  display.textContent = input1;
  }
  else { 
  display.textContent = input2;
  }
}

function secondfunction() {
if (func == 'plus') {
  result = Number(input1) + Number(input2);
  calculate();
  }
  if (func == 'minus') {
  result = Number(input1) - Number(input2);
  calculate();
  }
  if (func == 'mult') {
  result = Number(input1) * Number(input2);
  calculate();
  }
 }

function reset() {
  input1 = '';
  input2 = '';
  fkey = false;
  display.textContent = String(result);
  func = '';
}

function calculate() {
  input1 = String(result);
  input2 = '';
  display.textContent = String(result);
  }
 