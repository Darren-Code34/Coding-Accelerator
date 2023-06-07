function selection(){
    for(i = 0; i < arguments.length; i++){
        let min = i
        for(j = i+1; j <arguments.length; j++){
            if(arguments[j] < arguments[min]){
                min = j
            }
        }
        let temp = arguments[i]
        arguments[i] = arguments[min]
        arguments[min] = temp
    }
    console.log(arguments);
}

selection(6, 5, 4, 3, 2, 1)