function fibonacci(i){
    let tab = [0,1,1,2]
    for(j = 0; j <= i - 2; j++){
        tab[j+2] = tab[j+1] + tab[j]
    }
    console.log(tab[i]);
}

fibonacci(13)