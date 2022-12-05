import fs from "fs";
const data = fs.readFileSync("day2/input.txt", "utf8");

const formattedData = data.split("\n");

const scores = {
  A: {
    X: 4,
    Y: 8,
    Z: 3,
  },
  B: {
    X: 1,
    Y: 5,
    Z: 9,
  },
  C: {
    X: 7,
    Y: 2,
    Z: 6,
  },
};

let totalPoints = 0;
for (const move of formattedData) {
  const values = move.split(" ");
  totalPoints += scores[values[0]][values[1]];
}

console.log(totalPoints);
