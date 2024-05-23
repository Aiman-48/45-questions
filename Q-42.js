"use strict";
let magicianNames2 = ["harry poter",
    "yamna",
    "hamna"
];
function showMagicians2(magicians) {
    magicians.forEach(magician => console.log(magician));
}
function makeGreat(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
let great = makeGreat(magicianNames2);
showMagicians2(magicianNames2);
