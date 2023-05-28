function between(nbr1, nbr2){
    if(typeof(nbr1) !== "number" || typeof(nbr2) !== "number" || arguments.length < 2 ){
        console.log("error");
    }
    else{
        if(nbr1 < nbr2){
            for(i = nbr1; i < nbr2; i++){
                console.log(i);
            }
        }
        else if(nbr2 < nbr1){
            for(i = nbr2; i < nbr1; i++){
                console.log(i);
            }
        }
        
    }
}

between(20)