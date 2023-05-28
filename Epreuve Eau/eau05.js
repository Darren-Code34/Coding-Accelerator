function findString(string1,string2){
    if(typeof(string1) === "string" && typeof(string2) === "string"){
        let result = []
        for(i = 0; i < string2.length; i++){
            if(string1.indexOf(string2[i]) !== -1 ) {
                result.push(true)
            }
            else if(string1.indexOf(string2[i]) === -1 ){
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

