function sortedFusion(array1,array2){
    let arrayFusion = [...array1,...array2]
    console.log(arrayFusion);

    for(i = 0; i < arrayFusion.length; i++){
        let min = i
        for(j = i+1; j <arrayFusion.length; j++){
            if(arrayFusion[j] < arrayFusion[min]){
                min = j
            }
        }
        let temp = arrayFusion[i]
        arrayFusion[i] = arrayFusion[min]
        arrayFusion[min] = temp
    }
    console.log(arrayFusion)
}

sortedFusion([10, 20, 30], [15, 25, 35])

module.exports = function(){sortedFusion}