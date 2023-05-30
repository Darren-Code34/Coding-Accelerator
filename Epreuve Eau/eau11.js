function minimum(){
    let min = arguments.length
    for(i = 0; i < arguments.length; i++){
        for(j = 0; j < arguments.length -1; j++){
                if(arguments[i] === arguments[j]){
                    dif = Math.abs(Math.abs(arguments[i]) - Math.abs(arguments[j+1]))
                    if(dif < min){
                        min = dif
                    }
                }
                else{
                    dif = Math.abs(Math.abs(arguments[i]) - Math.abs(arguments[j]))
                    if(dif < min){
                        min = dif
                    }
                }
            
        }
        
    }
    console.log(min);
}

minimum(5, 1, 19, 21)