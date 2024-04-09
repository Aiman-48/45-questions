
function showMagicians2(magicians : string []){

    magicians.forEach(name => console.log(name))
}

function makeGreat (magicians : string []){

   return magicians.map(name => `the great ${name}`)
}

let magicianNames2 = ["harry poter",
    "yamna",
    "hamna"
]

let great= makeGreat(magicianNames2)


showMagicians2(great)