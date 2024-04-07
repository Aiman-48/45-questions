"use strict";
// addng a line
let guest5 = ["phoppo", "chachu", "daadi"];
let notComing2 = "phoppo";
let newGuest3 = "khala";
guest5[guest5.indexOf(notComing2)] = newGuest3;
guest5.unshift("nani");
let middleGuest1 = "nana";
let middleIndex1 = guest5.length / 2;
guest5.splice(middleIndex1, 0, middleGuest1);
guest5.push("dada");
console.log("we can invite only two people");
while (guest5.length > 2) {
    let removedguest = guest5.pop();
    console.log(`\nsorry ${removedguest} we can't invite u for dinner`);
}
// two people stll invited
guest5.map((invited) => console.log(`\n${invited} you are still invited for dinner`));
// remove elements
guest5.pop();
guest5.pop();
console.log(guest5);
