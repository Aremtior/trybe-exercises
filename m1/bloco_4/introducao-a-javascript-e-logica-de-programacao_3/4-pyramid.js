let n = 5;
let line;
let starLine;
let starCount = 1;
for (let i = n; i > 0; i -= 2) {
  line = '';
  starLine = '';
  for (let j = 1; j < i / 2; j++) {
    line += ' ';    
  }
  for (let k = 0; k < starCount; k++) {
    starLine += '*';
  }
  line += starLine;
  starCount += 2;
  console.log(line);
}