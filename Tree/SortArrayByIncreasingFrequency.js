/**
 * @param {number[]} nums
 * @return {number[]}
 */


var frequencySort = function(nums) {
    var countMap = new Map();
    nums.forEach(element=>{
        if(countMap.has(element)){
            countMap.set(element, countMap.get(element) + 1);
        }
        else{
           countMap.set(element, 1);
        }
    });

    nums.sort((a,b)=>{
        const freqDiff = countMap.get(a) - countMap.get(b);
        return freqDiff !==0 ? freqDiff : b-a;
    })
    return nums;
};

frequencySort([2,3,1,3,2]); 