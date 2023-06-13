function check(arrayOfStrings, str){
    if(arguments.length < 2 && arrayOfStrings.length === 0){
        console.log("erreur");
    }
    else{
        for(let i = 0; i < arrayOfStrings.length; i++){
            if(arrayOfStrings[i].includes(str) === false && arrayOfStrings[i].includes(str.toUpperCase()) === false){
                arrayOfStrings.splice(i, 1)
            }
        }
        console.log(arrayOfStrings);
    }
    
}

check(["Michel","Albert", "Thérèse", "Benoit"], "t")