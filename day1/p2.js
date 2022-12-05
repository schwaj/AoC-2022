import fs from "fs";
const data = fs.readFileSync("d1/input.txt", "utf8");

const formattedData = data.split("\n\n").map((set) => {
  return set.split("\n");
});

const calorieCounts = formattedData.map((elf) => {
  return elf.reduce((acc, curr) => {
    return parseInt(acc) + parseInt(curr);
  }, 0);
});

const sortedCalorieCounts = calorieCounts.sort((a, b) => b - a);

console.log(
  sortedCalorieCounts[0] + sortedCalorieCounts[1] + sortedCalorieCounts[2]
);
