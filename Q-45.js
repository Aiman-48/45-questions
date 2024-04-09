"use strict";
function carDetails(manufacture, modelName, ...additionalinfo) {
    const car = Object.assign({ manufacture, modelName }, Object.fromEntries(additionalinfo));
    return car;
}
const myCarDetails = carDetails("toyota", "corolla", ['year', 2022], ['color', 'black']);
console.log(myCarDetails);
