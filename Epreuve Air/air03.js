function intruder(tab){
    for(let i = 0; i < tab.length; i++){
        if(tab.indexOf(tab[i]) === tab.lastIndexOf(tab[i])){
            return console.log(tab[i]);
        }
    }
    return null
    
}

intruder(["bonjour", "monsieur", "bonjour"])

module.exports = function() {intruder}