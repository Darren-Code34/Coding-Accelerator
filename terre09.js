function square(a){
    if(a > 0 && Number.isInteger(a)){
        console.log(Math.sqrt(a));
    }
    else if(a < 0 ){
        console.log("le nombre entré est inferieur à 0");
    }
}

square(-15)