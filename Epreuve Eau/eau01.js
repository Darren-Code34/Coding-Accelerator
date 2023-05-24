function combinaison(){
    for(a = 0; a <= 99; a++){
        a < 10 ? a = `0${a}` : `${a}`
        for( b = 0; b <= 99; b++){
            b < 10 ? b = `0${b}` : `${b}`
            console.log(`${a} ${b}`);
        }
    }
}

combinaison()