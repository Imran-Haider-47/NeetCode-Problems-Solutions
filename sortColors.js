/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const swap = function(nums,a,b){
    let temp = nums[a];
    nums[a]= nums[b];
    nums[b]=temp;
}
var sortColors = function(nums) {
    
    var i=0;
    var j=0;
    var k = nums.length-1;
    while (j<=k){
        if(nums[j]===1){
            j++;
        }
        else if(nums[j]===2){
            swap(nums,j,k);
            
            k--;
        }
        else{
            swap(nums,i,j);
            i++;
            j++;
        }

    }
    return nums
};

console.log(sortColors([1,1,0,1,2,0]));