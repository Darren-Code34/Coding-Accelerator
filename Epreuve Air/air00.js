function separer(){
    let inputString = arguments[0]
    let result = [];
    let currentWord = "";
    for (let i = 0; i < inputString.length; i++) {
        let currentChar = inputString[i];
        if (currentChar === " " || currentChar === "\t" || currentChar === "\n") {
            if (currentWord.length > 0) {
                result.push(currentWord);
                currentWord = "";
            }
        } else {
            currentWord += currentChar;
        }
    }
    if (currentWord.length > 0) {
        result.push(currentWord);
    }
    console.log(result);
}

separer("Bonjour les gars")

module.exports = function()  {separer}