function hourConvert(timeStr){
    let [hours, minutes] = timeStr.split(":")
    hours = parseInt(hours, 10)
    minutes = parseInt(minutes, 10)

    if(hours === 12){
        console.log(`${hours} : ${minutes} PM`)
    }
    else if(hours > 12 && hours !== 24){
        hours -= 12
        console.log(`0${hours} : ${minutes} PM`)
    }
    else if(hours === 24){
        hours = 00
        console.log(`0${hours} : ${minutes} AM`)
    }
    
}

hourConvert("24:30")