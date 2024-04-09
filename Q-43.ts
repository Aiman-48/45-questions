
function showMagicians3(magicians : string []){

    magicians.forEach(name => console.log(name))
}

function makeGreat1 (magicians : string []){

   return magicians.map(name => `the great ${name}`)
}

let magicianNames4 = ["harry poter",
    "yamna",
    "hamna"
]

let copy_magician_names = magicianNames4.slice()

let copy_great_magicians = makeGreat1(copy_magician_names)

console.log("original array")
showMagicians3(magicianNames4)

console.log("copied arrat")
showMagicians3(copy_great_magicians)