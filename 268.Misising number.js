function missingNumber(nums){
    
        let sum = 0;
        for(i=0; i<=nums.length; i++){
            sum = sum + i;
        }

        let sum2 = 0;
        for(i=0; i<nums.length;i++){
            sum2 = sum2 + nums[i];
            console.log(sum2);
        }

        return sum - sum2;
}

console.log(missingNumber([1, 5, 3, 4, 0]));