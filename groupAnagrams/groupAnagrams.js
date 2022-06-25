/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// First solution
const groupAnagrams = (strs) => {
  strs.length === 1 ?? (strs) 
  const anagram = [];
    for (let outerIndex = 0; outerIndex < strs.length; outerIndex++) {
      let sortedOuterIndex = strs[outerIndex].split('').sort().join(''), 
      tuple = [strs[outerIndex]],
      nextIndex = outerIndex + 1;
      while (nextIndex < strs.length) {
        let sortedInnerStr = strs[nextIndex].split('').sort().join('');
        if (sortedOuterIndex === sortedInnerStr) {
            tuple.push(strs[nextIndex]);
            strs.splice(nextIndex, 1);
        } else {
         nextIndex++; 
        }        
        }
      anagram.push(tuple);
    }
    return anagram;
};


let testCase1 = ["eat","tea","tan","ate","nat","bat"];
let testCase2 = [""];
let testCase3 = ["", "", "", "tree"];
let testCase4 = ["a", "a", "ab"];
let testCase5 = ["a"];

console.log('testCase1:', groupAnagrams(testCase1));
console.log('testCase2:', groupAnagrams(testCase2));
console.log('testCase3:', groupAnagrams(testCase3));
console.log('testCase4:', groupAnagrams(testCase4));
console.log('testCase5:', groupAnagrams(testCase5));


// Second Solution because first one timed out after

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagramsSolution2 = (strs) => {
        let groups = {}
    strs.forEach(str => {
        const sortedStr = str.split('').sort().join('')
        if (groups[sortedStr]) {
            groups[sortedStr].push(str)
        } else {
            groups[sortedStr] = [str]
        }
    })
    return Object.values(groups)
};