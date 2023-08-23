var removeDuplicates = function(nums) {
    var numsSet = new Set(nums);
    const arr = [...numsSet];

    for (let i = 0; i < arr.length; i++) {
        nums[i] = arr[i];
    }

    console.log(nums); 
    return arr.length; 
};