function pyramid(character, numberOfStage){

    if(typeof character !== "string" || typeof numberOfStage !== "number" || character.length < 0 || numberOfStage.length < 0){
        console.log("erreur");
    }
    else{
        for(i = numberOfStage - 1; i >= 0; i--){
            let  nCharaters = 1
            let nWhiteSpace = numberOfStage - 1
            let whiteSpace = " "
            while(i > 0){
                console.log(whiteSpace.repeat(nWhiteSpace) + character.repeat(nCharaters) + whiteSpace.repeat(nWhiteSpace));
                nCharaters += 2
                nWhiteSpace -= 1
                i -= 1
            }
        }
    }
    
    
}

pyramid("o", 5)

module.exports = function(){pyramid}