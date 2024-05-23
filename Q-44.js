"use strict";
function makeSandwich(...items) {
    console.log(`making sandwitch with: ${items.join(', ')}.`);
    console.log("\n now enjoy sandwich");
}
makeSandwich("chicken", "cheese", "salad", "mayo");
makeSandwich("bread", "butter");
makeSandwich("butter", "bread", "chicken", "cheese", "salad", "mayo");
