function myQuickSort(tableau){
    
    if(tableau.length < 2){
        return tableau;
    }

    var pivot = tableau[0];
    var lesserArray = [];
    var greaterArray = [];

    for( let i = 1; i < tableau.length; i++){
        if(tableau[i] > pivot){
            greaterArray.push(tableau[i])
        }
        else{
            lesserArray.push(tableau[i])
        }
    }

    
    return myQuickSort(lesserArray).concat(pivot, myQuickSort(greaterArray));
}

const monTableau = [6, 5, 4, 3, 2, 1]

let result = myQuickSort(monTableau)
console.log(result);

module.exports = function(){myQuickSort}