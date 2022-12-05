import fs from "fs";
const data = fs.readFileSync("day3/input.txt", "utf8");

const elvesBackpacks = data.split("\n");

// console.log({formattedData})

const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const priorities = {};
for (const letter in letters) {
  priorities[letters[letter]] = Number(letter) + 1;
}

let total = 0;

for (const backpack of elvesBackpacks) {
  const first = backpack.substring(0, backpack.length / 2);
  const second = backpack.substring(backpack.length / 2);
  const chars = {};
  first.split("").some((char) => {
    if (!chars[char] && second.indexOf(char) >= 0) {
      total += priorities[char];
      return true;
    }
    chars[char] = true;
  });
}

console.log(total);
