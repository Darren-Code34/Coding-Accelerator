function calcul(tab){
    if(tab.length === 0){
        console.log("erreur");
    }
    else{
        let result = []
        for(let i = 0; i < tab.length - 1; i++){
            if(tab[tab.length-1] > 0 ){
                result.push(tab[i] + tab[tab.length-1])
            }
            else if(tab[tab.length-1] < 0){
                result.push(tab[i] - Math.abs(tab[tab.length-1]))
            }
        }
        console.log(result);
        
    }
    
}

calcul([10,11,12,20,-5])