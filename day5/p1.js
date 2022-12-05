import fs from "fs";
const data = fs.readFileSync("day5/input.txt", "utf8");

const formattedStacks = [];
const [stacks, moves] = data.split("\n\n");
const stackRows = stacks.split("\n");
for (let i = stackRows.length - 2; i >= 0; i--) {
  console.log(stackRows[i]);
  for (let j = 0; j < stackRows[i].length; j++) {
    if (formattedStacks[Math.floor(j / 4)] === undefined) {
      formattedStacks[j / 4] = [];
    }
    if (j === 1 && stackRows[i][j] !== " ") {
      formattedStacks[Math.floor(j / 4)].push(stackRows[i][j]);
    } else if ((j - 1) % 4 === 0 && stackRows[i][j] !== " ") {
      formattedStacks[Math.floor(j / 4)].push(stackRows[i][j]);
    }
  }
}

moves.split("\n").forEach((move, index) => {
  let formattedMove = "";
  formattedMove = move.replace(/move |from |to /g, "");
  const [amountToMove, from, to] = formattedMove.split(" ");
  for (let i = 0; i < amountToMove; i++) {
    formattedStacks[to - 1].push(formattedStacks[from - 1].pop());
  }
});

let output = "";

formattedStacks.forEach((stack) => {
  output += stack.pop();
});
console.log(output);
