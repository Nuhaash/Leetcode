var mySqrt = function(x) {

    let i=0;
    let j=x;

    while (i < j){
        const middle = Math.ceil((i+j)/2)
        const square = middle ** 2
    

    if(square === x) return middle;

    if(square < x){
        i = middle;
    }else{
        j = middle - 1;
    }
}
    return i; 
};

console.log(mySqrt(17));