"use strict";
function showMagicians2(magicians) {
    magicians.forEach(name => console.log(name));
}
function makeGreat(magicians) {
    return magicians.map(name => `the great ${name}`);
}
let magicianNames2 = ["harry poter",
    "yamna",
    "hamna"
];
let great = makeGreat(magicianNames2);
showMagicians2(great);
