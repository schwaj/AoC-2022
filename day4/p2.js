import fs from "fs";
const data = fs.readFileSync("day4/input.txt", "utf8");

const pairs = data.split("\n");

// const pairs = [
// '2-4,6-8',
// '2-3,4-5',
// '5-7,7-9',
// '2-8,3-7',
// '6-6,4-6',
// '2-6,4-8'
// ]

let overlappingAssignments = 0;

for (const pair of pairs) {
  const [first, second] = pair.split(",");
  const [firstLower, firstHigher] = first.split("-");
  const [secondLower, secondHigher] = second.split("-");
  //first contained in second
  //first lower greater than second lower
  //first higher less than second higher
  if (
    (Number(firstLower) >= Number(secondLower) &&
      Number(firstLower) <= Number(secondHigher)) ||
    (Number(firstHigher) >= Number(secondLower) &&
      Number(firstHigher) <= Number(secondHigher)) ||
    (Number(secondLower) >= Number(firstLower) &&
      Number(secondLower) <= Number(firstHigher)) ||
    (Number(secondHigher) >= Number(firstLower) &&
      Number(secondHigher) <= Number(firstHigher))
  ) {
    overlappingAssignments++;
  }
}
console.log(overlappingAssignments);
