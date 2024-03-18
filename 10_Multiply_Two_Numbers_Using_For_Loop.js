function multiply(a,b){
    let result = 0;
    for(let i = 1; i<=b; i++){
        result +=a;
    }
    return result;
}

let result = multiply(5,10)
console.log(result);