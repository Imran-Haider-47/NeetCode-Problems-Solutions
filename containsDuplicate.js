/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    
    const hashmap = new Map();
    if(nums.length===0)
    {
        return false;
    }
    for(let i=0; i< nums.length; i++)
    {
        if(hashmap.hasOwnProperty(nums[i]).toString()){
            
            if (Math.abs(i-hashmap.get(nums[i])) <=k ) 
            {
                return true;
            }
            hashmap.set(nums[i],i);  // value, index
            
        }
        else{
            hashmap.set(nums[i],i); 
        }
        
    }
    return false;

};

const nums = [1,2,3,1];
const k = 3;

console.log(containsNearbyDuplicate(nums,k));