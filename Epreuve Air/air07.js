function tabSorted(tab, num){
    tab.push(num)

    for(i = 0; i < tab.length; i++){
        let min = i
        for(j = i+1; j <tab.length; j++){
            if(tab[j] < tab[min]){
                min = j
            }
        }
        let temp = tab[i]
        tab[i] = tab[min]
        tab[min] = temp
    }
    console.log(tab)
}

tabSorted([10, 20, 30, 40, 50, 60, 70, 90], 33)