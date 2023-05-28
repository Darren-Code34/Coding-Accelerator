function findIndex(){
    let tab = []
    for(i = 0; i < arguments.length - 1; i++){
        tab.push(arguments[i])
    }
    // console.log(tab.indexOf(arguments[arguments.length -1]));
    for(j = 0; j < tab.length; j++){
        if(tab[j] === arguments[arguments.length -1] ) return console.log(j);
            
    }
    return console.log(-1);
}

findIndex("test", "boom")