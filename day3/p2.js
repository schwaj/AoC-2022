import fs from "fs";
const data = fs.readFileSync("day3/input.txt", "utf8");

const elvesBackpacks = data.split("\n");
const groupedElvesBackpacks = [];

// [[0, 1, 2], [3, 4, 5]]

for (const elfIndex in elvesBackpacks) {
  const groupIndex = Math.floor(elfIndex / 3);
  if (groupedElvesBackpacks[groupIndex] === undefined)
    groupedElvesBackpacks[groupIndex] = [];
  groupedElvesBackpacks[groupIndex].push(elvesBackpacks[elfIndex]);
}

console.log(groupedElvesBackpacks);

const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const priorities = {};
for (const letter in letters) {
  priorities[letters[letter]] = Number(letter) + 1;
}

let total = 0;

for (const elfGroup of groupedElvesBackpacks) {
  const first = elfGroup[0];
  const second = elfGroup[1];
  const third = elfGroup[2];
  const chars = {};
  first.split("").some((char) => {
    if (!chars[char] && second.indexOf(char) >= 0) {
      if (third.indexOf(char) >= 0) {
        total += priorities[char];
        return true;
      }
    }
    chars[char] = true;
  });
}

console.log(total);
