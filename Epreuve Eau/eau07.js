function upperFirstLetter(string){
    let copyString = string.split(" ")
    let firstLetter = []
    

    if(typeof(string) === "string"){
        for(i = 0; i < copyString.length; i++){
            firstLetter.push(copyString[i][0].toUpperCase() + copyString[i].slice(1))
            }

    }
    console.log(firstLetter.join(" "));

    
}

upperFirstLetter("je vais dormir")