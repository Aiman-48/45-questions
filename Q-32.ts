let currentUsers = ["Ali","hamna","yamna","hafs","tahir","ahmed",]
let newUsers =["raza","maryam","taha",]


newUsers.forEach(newUser => {
    if (currentUsers.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    } else {
        console.log(`${newUser} is available.`);
    }
});