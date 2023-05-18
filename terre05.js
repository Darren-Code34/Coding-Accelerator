function division(a,b){
    if( a < b || b === 0){
        console.log("erreur.");
    }
    else{
        const resultat = Math.trunc(a / b) 
        const reste = a % b
        console.log(resultat);
        console.log(reste);
    }
}

division(3,5)