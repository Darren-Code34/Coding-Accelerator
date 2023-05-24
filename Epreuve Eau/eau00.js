function combinaison(){
    let tab = []
    for(i = 0; i <= 9; i++){
        for(j = 0; j <= 9; j++){
            for(k = 0; k <= 9; k++){
                if(i !== j && i !== k && j !== k ){
                    let combi = [i,j,k]
                    if(!tab.includes(combi.sort().join(""))){
                        tab.push(combi.join(""))
                    }
                }
            }
        }
    }
    console.log(tab);
    
    
}

combinaison()