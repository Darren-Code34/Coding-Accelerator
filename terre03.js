const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

function showRestalphabet(lettre){
    for(i = 0; i < alphabet.length; i++){
        if(alphabet.indexOf(alphabet[i]) >= alphabet.indexOf(lettre)){
            console.log(alphabet[i]);
        }
    }
}

showRestalphabet("n")