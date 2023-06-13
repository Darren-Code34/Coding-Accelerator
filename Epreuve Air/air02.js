function concatString(arr, separateur){
    let result = "" 
    for(let i = 0; i < arr.length; i++){
        result += arr[i]+separateur
    }
    console.log(result);
}

concatString(["je", "teste", "des", "trucs"], " ")