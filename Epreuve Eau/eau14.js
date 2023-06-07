function triAscii(){
    let tabCode = []
    for( n = 0; n < arguments.length; n++){
        tabCode.push(arguments[n].charCodeAt()+`${arguments[n]}`  )
    }
    
    for(i = 0; i < tabCode.length; i++){
        let min = i
        for(j = i + 1; j < tabCode.length; j++ ){
            if(tabCode[j] < tabCode[min]){
                min = j
            }
        }
        let temp = tabCode[i]
        tabCode[i] = tabCode[min]
        tabCode[min] = temp
    }
    
    let trie = []
    for(k = 0; k < tabCode.length; k++){
        trie.push(tabCode[k].slice(2))
    }
    console.log(trie);
}

triAscii("A", "Z", "E", "R", "T", "Y")