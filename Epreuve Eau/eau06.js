function Uppercase(string){
    let tab = []
    
    if(typeof(string) === "string"){
        for(i = 0; i < string.length; i++){
            if(i % 2 === 0){
                tab.push(string[i].toUpperCase())
            }
            else{
                tab.push(string[i])
            }
        }
        console.log(tab.join(""));
    }
}

Uppercase("bonjouR")