/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length ===0 || prices.length===1){
        return 0;
    }
    var left = prices[0];
    var right = prices[1];
    var profit=0;
    for(var i=1;i<prices.length;i++)
    {
        if (right-left > profit){
            profit= right-left;
            right= prices[i+1];
            continue;
        }
        if (right-left< 0 ){
            left=right;
            right=prices[i+1];
        }
        right= prices[i+1];   
    }
    


    return profit;
    
};

const prices = [7,1,5,3,6,4];
console.log(maxProfit(prices));

