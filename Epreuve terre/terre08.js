function puissance(a,b){
    let result = 0
    if(b > 0){
        result = a**b
        console.log(result);
    }
    else if(b < 0){
        console.log("erreur, votre second nombre est inferieur à 0");
    }

    
}

puissance(2,4)