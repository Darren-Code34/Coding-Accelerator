function nextPrime(nbr){
    
    if(nbr < 0){
        console.log(-1);
    }
    else{
        for(i = 2; i < nbr; i++){
            if(nbr % i === 0){
                nbr += 1
            }
        }
        return console.log(nbr);
    }
    

    
}

nextPrime(100)