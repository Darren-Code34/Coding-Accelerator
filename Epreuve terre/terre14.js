function trie(){
    for(i = 0; i < arguments.length; i++){
        if(arguments[i] < arguments[i+1]){
            return console.log("Triée");
        }
        else{
            return console.log("Pas Triée");
        }
    }
}

trie(5,8,9,10)