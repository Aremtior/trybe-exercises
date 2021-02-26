let n = 5;
let line = '';
let starLine = '';

for (let i = n; i > 0; i--) {
  line = '';
  for (let j = 1; j < i; j++) {
    line += ' ';    
  }
  starLine += '*';
  line += starLine;
  console.log(line);
}