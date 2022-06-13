/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function(nums) {
    let lengthLeft = nums.length;
    let zeros = 0
    while (lengthLeft !== -1) {
        if (nums[lengthLeft] === 0) {
            nums.splice(lengthLeft, 1);
            zeros++;
        }
        lengthLeft--;
    }
    for (let i = 0; i < zeros; i++) {
        nums.push(0)
    }
    return nums;
};
