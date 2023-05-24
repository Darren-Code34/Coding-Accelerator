function reverse(){
    if(arguments.length === 0){
        console.log("il n'y a pas de mots");
    }
    for( i = arguments.length - 1; i >= 0; i--){
        console.log(arguments[i]);
    }
}

reverse("mignon", "suis", "je")