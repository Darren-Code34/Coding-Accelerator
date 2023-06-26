function rotation(){
    let arrayRot = [...arguments]
    const firstElement = arrayRot.shift()
    arrayRot.push(firstElement)
    console.log(arrayRot);
}


rotation("Michel", "Albert", "Thérèse", "Benoit")

module.exports = function(){rotation}