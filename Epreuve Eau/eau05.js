function findString(str1,str2){
    if(typeof(str1) === "string" && typeof(str2) === "string"){
        let result = []
        for(i = 0; i < str2.length; i++){
            if(str1.indexOf(str2[i]) !== -1 ) {
                result.push(true)
            }
            else if(str1.indexOf(str2[i]) === -1 ){
                result.push(false)
            }
        }
        if(result.indexOf(false) !== -1){
            console.log(false);
        }
        else{
            console.log(true);
        }
        
    }
    else{
        console.log("error");
    }
}

findString("après-midi", "aprèse")

