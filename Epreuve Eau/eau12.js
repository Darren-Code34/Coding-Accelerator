function trie(){
    let tab = []
    for(i = 0; i < arguments.length; i++){
        if(typeof(arguments[i]) !== "number" || arguments.length === 0){
            return console.log("error");
        }
        else if(typeof(arguments[i]) === "number" || arguments.length > 0) {
            tab.push(arguments[i])
        }

        
    }
    console.log(tab.sort());
}

trie(6, 5, 4, 3, 2, 1)