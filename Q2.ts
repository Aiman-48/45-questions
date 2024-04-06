// lower case

let personName = "aiman";
console.log("lower case:",personName.toLocaleLowerCase())

// upper case

console.log("upper case:",personName.toUpperCase())

//  Title case

console.log("Title case:",personName.replace(/\bw/g,c => c.toUpperCase()) )