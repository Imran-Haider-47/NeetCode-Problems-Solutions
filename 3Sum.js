/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var TwoSum= function(nums,i1,j){
    
    let left = i1+1;
    for(let i=i1; i< nums.length;i++){
        if (i>=j){
            break;
        }
        while(nums[j]===nums[j-1]){
            j=j-1;
        }
        
        while(nums[left]===nums[left+1]){
            left=left+1;
        }
        if(nums[left]+nums[j]> -(nums[i1])){
            j=j-1;
        }
        else if (nums[left]+ nums[j] < -(nums[i1]) ){
            i=i+1;
        }
        else if (nums[left]+ nums[j]== -(nums[i1])){
            console.log('result = ', nums[left], nums[i1],nums[j]);
        }
}
}

var threeSum = function(nums) {
    // Sorting
    nums.sort((a,b)=> a-b);
    //fixing n1
    console.log(nums);
    for(var i=0;i< nums.length-3;i++){
        // Avoid the duplicates
        let j= nums.length-1;
        while(nums[i]===nums[i+1]){
            i=i+1;
        }
        
        // 2sum
        TwoSum(nums,i,j);
       
    }

};
var nums = [-1,0,1,2,-1,-4]
threeSum(nums);