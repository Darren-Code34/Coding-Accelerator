function findEnvenNumbers(nombre){ 

    if(typeof(nombre) !== "number"){
        console.log("ce ci n'est pas un entier relatif");
    }
    else{
        const division = nombre % 2
        if(division === 0){
            console.log("pair");
        }
        else{
            console.log("impair");
        }
    }

    
}

findEnvenNumbers(3)
