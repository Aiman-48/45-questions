"use strict";
// lower case
let personName = "Aiman Tahir";
console.log("lower case:", personName.toLowerCase());
// upper case
console.log("upper case:", personName.toUpperCase());
//  Title case
console.log("Title case:", personName.replace(/\bw/g, c => c.toUpperCase()));
