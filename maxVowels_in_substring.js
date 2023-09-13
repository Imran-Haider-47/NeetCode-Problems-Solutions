/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

function isVowel(ch) {
    return (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u');
  }
  
  function maxVowels(s, k) {
    let i = 0;
    let j = 0;
    let maxCount = 0;
    let count = 0;
  
    while (j < s.length) {
      if (isVowel(s[j])) {
        count++;
      }
  
      if (j - i + 1 === k) {
        maxCount = Math.max(maxCount, count);
        if (isVowel(s[i])) {
          count--;
        }
        i++;
      }
      j++;
    }
  
    return maxCount;
  }