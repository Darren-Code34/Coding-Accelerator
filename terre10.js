function premier(nbr){
    if(nbr < 2){
        console.log(`${nbr} n'est pas un nombre premier` );
    }
    for(i = 2; i < nbr; i++){
        if( nbr % i === 0) return console.log(`${nbr} n'est pas un nombre premier`); 
    }
    
    return console.log(`${nbr} est un nombre premier`);
}



premier(4)