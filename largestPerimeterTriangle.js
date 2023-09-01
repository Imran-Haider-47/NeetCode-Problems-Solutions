/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    
    nums.sort((a,b)=>a-b);
    console.log(nums);
    for(let i=nums.length-3; i>=0;i--){
        if(nums[i]+nums[i+1] > nums[i+2])
        {
            console.log(nums[i],nums[i+1],nums[i+2])
            return (nums[i]+nums[i+1]+nums[i+2]);
        }
    }
    return 0;

};
const nums = [2,1,2];
console.log(largestPerimeter(nums));