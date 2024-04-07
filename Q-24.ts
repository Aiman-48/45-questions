let apple = "apple";
let uppercaseApple = "APPLES";
let thirty = 30;
let twenty = 20;
let fruits = ["apple","orange","kiwi"]

// test equality and inequality

console.log("Is app is equal to apple?")
console.log (apple == "apple");

console.log("\nIs app is not equal to apple?")
console.log (apple != "apple");

// using lower case function

console.log("Is APPLE is equal t apple after converting it in lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple")


console.log("Is APPLE is equal t apple after converting it in lowerCase?");
console.log(uppercaseApple.toLowerCase() != "apple")

// numerical tests
// equals
console.log("\nIs thirty is equal to twenty?");
console.log(thirty == twenty)
// not equals
console.log("\nIs thirty is not equal to twenty?");
console.log(thirty != twenty);
// GREATER
console.log("\nIs thirty is greater then 0?");
console.log(thirty > 0);
//LESS THEN
console.log("\nIs thirty is less then 20?");
console.log(thirty < 20);

// GREATER THAN OR EQUAL TO
console.log("\nIs thirty is greater thAN OR EQUAL TO 5?");
console.log(thirty >= 5);

//LESS THEN or equal
console.log("\nIs thirty is less then or equal to 20?");
console.log(thirty <= 20);

//using "and" &&  operators
console.log("\n thirty is not equal to 20 and thirty is greater than 20");
console.log(thirty != 20 && thirty > 20);

console.log("\n thirty is not equal to 20 and thirty is greater than 20");
console.log(thirty != 20 && thirty > 40);

//using "or" || operators
console.log("\n thirty is greater then 50 or thirty is equal to 30");
console.log(20 > 50 || 30 == 30)

console.log("\n thirty is greater then 50 or thirty is not equal to 30");
console.log(20 > 50 || 30 != 30)

// testing is item included in array
console.log("\n is oranges included in my fruits");
console.log(fruits.includes("orange"));
//not included
console.log("\n is oranges not included in my fruits");
console.log(!fruits.includes("orange"));
