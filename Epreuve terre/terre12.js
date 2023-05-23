function hourConvert(timeStr){
    const [time, modifier] = timeStr.split(" ")
    let [hours, minutes]= time.split(':')
    if(hours === "12"){
        hours = "00"
    }
    if(modifier === "PM"){
        hours = parseInt(hours, 10) + 12
    }
    console.log(`${hours}:${minutes}`);
}

hourConvert("01:28 PM")