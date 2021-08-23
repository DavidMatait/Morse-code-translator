// Const morse alphabet
const alphabet={
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
  "/":"/"
}

//other 
const textInput=document.getElementById("english-text");
const morseInput=document.getElementById("morse-text");
const output1=document.querySelector(".output-1");
const output2=document.querySelector(".output-2");
const btn=document.querySelector(".translate1");
const btn2=document.querySelector(".translate2");
const reset=document.querySelector(".reset");

let keys=Object.keys(alphabet);
let values=Object.values(alphabet);

//Make button submit text from eng
btn.addEventListener('click',function(){

  const input=textInput.value;
  const splitInput=input.toLowerCase().split("");
  const mapInput=splitInput.map(space => space === " " ? "/" :space);
  const filteredMorse=mapInput.map((keys)=> alphabet[keys]).join(" ");
  output1.innerHTML=filteredMorse;
})

//Make button submit text from morse
btn2.addEventListener('click',function(){
  const input=morseInput.value;
  const splitMorse=input.split(" ")
  const morse = splitMorse.map((n)=> {
    n.toString()
    return Object.keys(alphabet)[Object.values(alphabet).indexOf(n)]
  })

const spacing=morse.map((m) => m.replace("/", " "));
const ultResult=spacing.join("");
output2.innerHTML=ultResult;
})

//Reset button
reset.addEventListener('click',function(){

  output1.innerHTML="From English to morse";
  output2.innerHTML="From morse to English";
  morseInput.value="";
  textInput.value="";
})
