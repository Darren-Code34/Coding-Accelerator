function splitString(){
    let result = []
    let index = arguments[0].indexOf(arguments[1]);
    while (index !== -1) {
        result.push(arguments[0].slice(0, index));
        arguments[0] = arguments[0].slice(index + arguments[1].length);
        index = arguments[0].indexOf(arguments[1]);
    }
    result.push(arguments[0]);
    console.log(result);
}

splitString("Crevette magique dans la mer des étoiles", "la")