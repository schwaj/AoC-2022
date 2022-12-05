import fs from "fs";
const data = fs.readFileSync("day2/input.txt", "utf8");

const formattedData = data.split("\n");

const scores = {
  A: {
    X: 3,
    Y: 4,
    Z: 8,
  },
  B: {
    X: 1,
    Y: 5,
    Z: 9,
  },
  C: {
    X: 2,
    Y: 6,
    Z: 7,
  },
};

let totalPoints = 0;
for (const play of formattedData) {
  const values = play.split(" ");
  totalPoints += scores[values[0]][values[1]];
}

console.log(totalPoints);
