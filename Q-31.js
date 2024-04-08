"use strict";
// array condition 
let userNames1 = ["Ali", "hamna", "admin", "yamna", "tahir", "ahmed",];
userNames1 = [];
if (userNames1.length === 0) {
    console.log("you need to find some users");
}
else {
    userNames1.forEach(oneUser => {
        if (oneUser === "admin") {
            console.log(`hello ${oneUser}, would you like to see a status report`);
        }
        else {
            console.log(`hello ${oneUser}, thank you for logging in`);
        }
    });
}
// condition 2
userNames1 = [];
if (userNames1.length === 0) {
    console.log("you need to find some users");
}
else {
    userNames1.forEach(oneUser => {
        if (oneUser === "admin") {
            console.log(`hello ${oneUser}, would you like to see a status report`);
        }
        else {
            console.log(`hello ${oneUser}, thank you for logging in`);
        }
    });
}
