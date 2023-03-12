// 374: Guess number

var guessNumber = function(num) {
    let low = 1;
    let high = num;

    while(low <= high){
        mid = Math.floor((low+high)/2);

        if(guess(mid) === 1){
            low = mid+1;
        }else if(guess(mid) === -1){
            high = mid-1;
        }else{
            return mid;
        }
    }
};
