function inversion(chaine){
    let tab = []
    let reversed
    for(i = chaine.length - 1; i >= 0; i--){
        tab.push(chaine[i])
    }
    reversed = tab.join('')
    console.log(reversed);
}

inversion("lehciM")