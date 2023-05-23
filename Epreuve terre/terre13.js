function middle(a,b,c){
    if((a > b && a < c) || (a > c && a < b)){
        console.log(a)
    }
    else if((b > a && b < c) || (b > c && b < a)){
        console.log(b);
    }
    else if((c > a && c < b) || (c > b && c < a)){
        console.log(c);
    }

    else if( a == b && a == c && b == c){
        console.log("erreur");
    }
}

middle(10,10,10)