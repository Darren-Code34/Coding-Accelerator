function onlyOne(str){
    let result = []
    if(typeof(str) !== "string" || str == ""){
        console.log("erreur");
    }
    else{
        for(let i = 0; i < str.length - 2; i+= 2){
            if(str[i+1] != str[i]){
                result.push(str[i])
                result.push(str[i+1])
            }
            else{
                result.push(str[i])
            }
        }
        console.log(result.join(""));
    }
    
}

onlyOne("Hello milady,   bien ou quoi ??")