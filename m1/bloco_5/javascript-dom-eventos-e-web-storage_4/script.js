let btns = ['Font-size', 'Font-color', 'BG-color', 'Font-family', 'Line-height'];
function settings() {
  let list = document.getElementById('settings');
  for (const name of btns) {
    let li = document.createElement('li');
    let btn = document.createElement('button');
    btn.innerHTML = name;
    li.appendChild(btn);
    list.appendChild(li);
  }
}
settings()