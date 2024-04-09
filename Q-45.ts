function carDetails(manufacture: string, modelName : string, ...additionalinfo : any [] ){ 



    const car ={manufacture,modelName,...Object.fromEntries

        (additionalinfo)
    };
    return car
}

const myCarDetails = carDetails ("toyota","corolla",['year',2022],['color','black'])

console.log(myCarDetails)