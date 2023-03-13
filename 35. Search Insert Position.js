// var searchInsert = function(nums, target) {
//     let start = 0; 
//     let end = nums.length-1; 
//     let mid;  

//     while(start <= end) {
//         mid = Math.floor((start + end) / 2); 

//         if(nums[mid] === target) {
//             return mid; 
//         } 
//         else if(nums[mid] < target) {
//             start = mid + 1; 
//         } 
//         else {
//             end = mid - 1; 
//         }
//     }

//     return start;
// };

var searchInsert = function(nums, target){

    let start = 0;
    let end = nums.length-1;
    let mid;

    mid = Math.floor((start+end)/2);

    while(start < end){
        if(nums[mid] === target){
            return mid;
        }else if (nums[mid] < target){
            start = mid + 1;
        }else{
            end = mid;
        }

        mid = Math.floor((start/end)/2);
    }

    if (nums[mid] < target){
        return mid+1;
    }
}