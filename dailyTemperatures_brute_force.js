/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    // const stack = [];
    // const res = new Array(temperatures.length).fill(0);
    
    // let index = 0;
    // for (const temp of temperatures ){
    //     while(stack)
    // }    
    const res = [];
    for (var i=0;i < temperatures.length-1; i++)
    {
        for(var j=i+1;j< temperatures.length;j++){
            if(temperatures[j]>temperatures[i]){
                res.push(j-i);
                break;
            }
        }
    }
    while(res.length < temperatures.length){
        res.push(0);
    }
    return res; 

};

// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]

temperatures = [73,74,75,71,69,72,76,73];
console.log(dailyTemperatures(temperatures));
