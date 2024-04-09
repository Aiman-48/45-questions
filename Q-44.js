"use strict";
function makeSandwich(...items) {
    console.log(`\n making a sandwitch with following items : \n`);
    items.forEach(singleItem => console.log(singleItem));
    console.log("\n now enjoy sandwich");
}
makeSandwich("chicken", "cheese", "salad", "mayo");
makeSandwich("bread", "butter");
makeSandwich("butter", "bread", "chicken", "cheese", "salad", "mayo");
