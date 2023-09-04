/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if(n==1 && trust.length===0){
        return 1;
    }
    var countArray = new Array(n+1).fill(0);
    
    for(let i=0;i < trust.length; i++){
        let u = trust[i][0];
        let v = trust[i][1];
        countArray[u]--;
        countArray[v]++;
    }
    for(let i=0; i< countArray.length;i++)
    {
        if(countArray[i]=== n-1){
            return i;
        }
    }
    return -1;

};
const n = 3;
const trust = [[1,3],[2,3],[3,1]]
console.log(findJudge(n,trust));