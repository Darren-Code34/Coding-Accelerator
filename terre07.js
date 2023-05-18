function size(chaine){
    if(typeof(chaine) !== "string"  || arguments.length > 1){
        console.log("erreur.");
    }
    else{
        console.log(chaine.length);
    }
}

size("10")