let n = 7;
let line;
let starLine;
let starCount = 1;
for (let i = n; i > 0; i -= 2) {
  line = '';
  starLine = '*';
  for (let j = 1; j < i / 2; j++) {
    line += ' ';    
  }
  for (let k = 2; k <= starCount; k++) {
    if (starCount != n) {      
      if (k < starCount) {
        starLine += ' ';
      } else {
        starLine += '*';
      }
    } else {
      starLine += '*';
    }
  }
  line += starLine;
  starCount += 2;
  console.log(line);
}