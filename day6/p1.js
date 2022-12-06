import fs from "fs";
const data = fs.readFileSync("day6/input.txt", "utf8");

let letters = [];
let output = 0;
for (const letterIndex in data) {
  const letter = data[letterIndex];
  if (letters.length === 4) {
    if (letters.indexOf(letter) > 0) {
      letters.shift();
      letters.push(letter);
    } else {
      if (new Set(letters).size !== letters.length) {
        letters.shift();
        letters.push(letter);
      } else {
        output = parseInt(letterIndex);
        break;
      }
    }
  } else {
    letters.push(letter);
  }
}

console.log(output);
