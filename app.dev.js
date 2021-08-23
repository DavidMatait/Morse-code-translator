"use strict";

// Const morse alphabet
var alphabet = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  "/": "/"
}; //other 

var textInput = document.getElementById("english-text");
var morseInput = document.getElementById("morse-text");
var output1 = document.querySelector(".output-1");
var output2 = document.querySelector(".output-2");
var btn = document.querySelector(".translate1");
var btn2 = document.querySelector(".translate2");
var reset = document.querySelector(".reset");
var keys = Object.keys(alphabet);
var values = Object.values(alphabet); //Make button submit text from eng

btn.addEventListener('click', function () {
  var input = textInput.value;
  var splitInput = input.toLowerCase().split("");
  var mapInput = splitInput.map(function (space) {
    return space === " " ? "/" : space;
  });
  var filteredMorse = mapInput.map(function (keys) {
    return alphabet[keys];
  }).join(" ");
  output1.innerHTML = filteredMorse;
}); //Make button submit text from morse

btn2.addEventListener('click', function () {
  var input = morseInput.value;
  var splitMorse = input.split(" ");
  var morse = splitMorse.map(function (n) {
    n.toString();
    return Object.keys(alphabet)[Object.values(alphabet).indexOf(n)];
  });
  var spacing = morse.map(function (m) {
    return m.replace("/", " ");
  });
  var ultResult = spacing.join("");
  output2.innerHTML = ultResult;
}); //Reset button

reset.addEventListener('click', function () {
  output1.innerHTML = "From English to morse";
  output2.innerHTML = "From morse to English";
  morseInput.value = "";
  textInput.value = "";
});