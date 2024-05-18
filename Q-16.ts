// telling guest about big dinner
let guest4 = ["phoppo", "chachu", "daadi"];

console.log("welcome all we found a bigger dinner table");

// addding person name in starting of array
guest4.unshift("nani");

//add person in middle
let middleIndex = guest4.length / 2;
guest4.splice(middleIndex, 0, "nana");

// add person in last
guest4.push("dada");

// sending invitation to every person

guest4.forEach((invited) =>
  console.log(`dear ${invited} you are invited to dinner`)
);
