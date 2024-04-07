"use strict";
// guest is not comin
let guest3 = ["phoppo",
    "chachu", "daadi"];
let notComing = "phoppo";
console.log(`${notComing} can not make it, for dinner`);
//inviting new guest
let newGuest = "khala";
guest3[guest3.indexOf(notComing)] = newGuest;
console.log(guest3);
//second invitation
guest3.map((myguest) => console.log(`hello,${myguest} you are invited to dinner,be on time`));
