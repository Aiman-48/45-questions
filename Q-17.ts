let guest5 = ["phoppo", "chachu", "daadi"];

console.log("we can invite only two people")

while(guest5.length>2){

   let removedguest = guest5.pop();
   console.log(`\nsorry ${removedguest} we can't invite u for dinner`)

}

// two people stll invited

guest5.forEach((invited)=> console.log(`\n ${invited} you are still invited for dinner`))



guest5.splice(0, guest5.length)

console.log(guest5)

