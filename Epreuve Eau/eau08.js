function numberOnly(string){
    const regex = /\D+/

    if(regex.test(string)){
        console.log(false);
    }
    else{
        console.log(true);
    }
}

numberOnly("abnht")