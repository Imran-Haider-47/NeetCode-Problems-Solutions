/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if(flowerbed.length===0 || n===0){
        return true;
    }
    for(let i=0; i< flowerbed.length;i++){
        if(flowerbed[i]===0){
            let left_is_empty = (i===0) || flowerbed[i-1]===0; 
            let right_is_empty = (i=== flowerbed.length-1) || flowerbed[i+1]===0;
            if(left_is_empty && right_is_empty){
                flowerbed[i]=1;
                n--;
                if(n===0){
                    return true;
                }
            }
        }
    }
    return false;
};
const flowerbed = [1,0,1,0,1,0,1];
const n = 2;
console.log(canPlaceFlowers(flowerbed,n));