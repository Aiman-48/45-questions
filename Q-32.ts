let currentUsers = ["Ali","hamna","yamna","hafs","tahir","ahmed",]
let newUsers =["raza","hamna","maryam","yamna","Ali","taha",]


newUsers.forEach(newOneUsers => {

    let our_condition = currentUsers.some(currentOneUser => currentOneUser.toLowerCase() === newOneUsers.toLowerCase() )

        if(our_condition){

            console.log(`sorry ${newOneUsers} is already taken!`)
}else{

    console.log(`this user ${newOneUsers} is available!`)
}

        
})