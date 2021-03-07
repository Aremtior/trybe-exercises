let btns = ['Font-size', 'Font-color', 'BG-color', 'Font-family', 'Line-height'];
function settings() {
  let list = document.getElementById('settings');
  for (const name of btns) {
    let li = document.createElement('li');
    let btn = document.createElement('button');
    btn.innerHTML = name;
    btn.id = name.toLowerCase();
    li.appendChild(btn);
    list.appendChild(li);
  }
}
settings();

function fontColor() {
  let paragraph = document.getElementsByTagName('p');
  let pFontColor = localStorage.getItem('pFontColor');
  if (pFontColor == 'red') {
    localStorage.setItem('pFontColor', 'green');
  } else if (pFontColor == 'green') {
    localStorage.setItem('pFontColor', 'black');
  } else {
    localStorage.setItem('pFontColor', 'red');
  }
  for (const p of paragraph) {
    p.style.color = localStorage.getItem('pFontColor');
  }
}

function fontSize() {
  let paragraph = document.getElementsByTagName('p');
  console.log(paragraph);
  let pFontSize = parseInt(localStorage.getItem('pFontSize'));
  console.log(pFontSize);
  if (pFontSize >= 16 && pFontSize < 18) {
    localStorage.setItem('pFontSize', '18px');
    console.log(localStorage.getItem('pFontSize'));
  } else if (pFontSize >= 18 && pFontSize < 24) {
    localStorage.setItem('pFontSize', '24px');
    console.log(localStorage.getItem('pFontSize'));
  } else {
    localStorage.setItem('pFontSize', '16px');
  }
  for (const p of paragraph) {
    p.style.fontSize = localStorage.getItem('pFontSize');
    console.log(localStorage.getItem('pFontSize'));
  }
}
let btnColor = document.getElementById('font-color');
btnColor.addEventListener('click', fontColor);

let btnSize = document.getElementById('font-size');
btnSize.addEventListener('click', fontSize);

function initialize() {
  let paragraph = document.getElementsByTagName('p');
  for (const p of paragraph) {
    p.style.fontSize = localStorage.getItem('pFontSize');
    p.style.color = localStorage.getItem('pFontColor');
  }
}
initialize();