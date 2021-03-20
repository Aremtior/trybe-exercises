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

function bgColor() {
  let wholePage = document.body;
  let bgColor = localStorage.getItem('bgColor');

  if (bgColor == 'white') {
    localStorage.setItem('bgColor', 'lightgray');
  } else if (bgColor == 'lightgray') {
    localStorage.setItem('bgColor', 'gray');
  } else {
    localStorage.setItem('bgColor', 'white');
  }
  wholePage.style.backgroundColor = localStorage.getItem('bgColor');
}

function fontFamily() {
  let paragraph = document.getElementsByTagName('p');
  let pFontFamily = localStorage.getItem('pFontFamily');
  if (pFontFamily == 'Times New Roman') {
    localStorage.setItem('pFontFamily', 'Arial');
  } else if (pFontFamily == 'Arial') {
    localStorage.setItem('pFontFamily', 'monospace');
  } else {
    localStorage.setItem('pFontFamily', 'Times New Roman');
  }
  for (const p of paragraph) {
    p.style.fontFamily = localStorage.getItem('pFontFamily');
  }
}

function lineHeight() {
  let paragraph = document.getElementsByTagName('p');
  let pLineHeight = parseInt(localStorage.getItem('pLineHeight'));
  if (pLineHeight >= 18 && pLineHeight < 20) {
    localStorage.setItem('pLineHeight', '20px');
  } else if (pLineHeight >= 20 && pLineHeight < 22) {
    localStorage.setItem('pLineHeight', '22px');
  } else {
    localStorage.setItem('pLineHeight', '18px');
  }
  for (const p of paragraph) {
    p.style.lineHeight = localStorage.getItem('pLineHeight');
  }
}

let btnSize = document.getElementById('font-size');
btnSize.addEventListener('click', fontSize);

let btnColor = document.getElementById('font-color');
btnColor.addEventListener('click', fontColor);

let btnBGColor = document.getElementById('bg-color');
btnBGColor.addEventListener('click', bgColor);

let btnFFamily = document.getElementById('font-family');
btnFFamily.addEventListener('click', fontFamily);

let btnLineHeight = document.getElementById('line-height');
btnLineHeight.addEventListener('click', lineHeight);

function initialize() {
  let paragraph = document.getElementsByTagName('p');
  let wholePage = document.body;
  wholePage.style.backgroundColor = localStorage.getItem('bgColor');
  for (const p of paragraph) {
    p.style.fontSize = localStorage.getItem('pFontSize');
    p.style.color = localStorage.getItem('pFontColor');
    p.style.fontFamily = localStorage.getItem('pFontFamily');
    p.style.lineHeight = localStorage.getItem('pLineHeight');
  }
}
initialize();