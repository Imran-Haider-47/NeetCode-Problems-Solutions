var lengthOfLongestSubstring = function(s) {
    const mySet = new Set();
    var left = 0;
    var res = 0;
    for (let i=0;i< s.length; i++)
    {
       while(mySet.has(s[i])){
        mySet.delete(s[left]);
        left++;
       }
       mySet.add(s[i]);
       res = Math.max(res, i-left+1);
    }
    return res;
    

};


s= "pwwkew";
console.log(lengthOfLongestSubstring(s));
