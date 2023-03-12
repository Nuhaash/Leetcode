var isPerfectSquare = function(num){
    let start = 1;
    let end = num;

    while(start <=end){
        let mid = Math.floor((start+end)/2);

    if( mid*mid == num){
        return true
    }else if (mid*mid > num){
        end = mid-1;
    }else{
        start = mid+1;
    }
    }
    return false;
};

console.log(isPerfectSquare(25));