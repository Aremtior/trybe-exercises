let n = 5;
let line = '';
let starLine = '';

for (let i = n; i > 0; i--) {
  line = '';
  let m = i;
  for (let j = 1; j < m; j++) {
    line += ' ';    
  }
  starLine += '*';
  line += starLine;
  console.log(line);
}