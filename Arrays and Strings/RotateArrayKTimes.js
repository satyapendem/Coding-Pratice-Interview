/**
 * Rotate Array K times
 * Input: nums = [1,2,3,4,5,6,7], k = 3
 * Output: [5,6,7,1,2,3,4]
 * Explanation: rotate 1 steps to the right: [7,1,2,3,4,5,6] 
 *              rotate 2 steps to the right: [6,7,1,2,3,4,5] 
 *              rotate 3 steps to the right: [5,6,7,1,2,3,4]
 * 
 */

// By Using Array Functions
const rotateArray = (nums, k) => {
    try {
        for (let i=0; i<k; i++) {
            nums.unshift(nums.pop());
        }
        return nums;
    } catch (error) {
        console.error("Error in rotateArray", error);
    }
}
console.log(rotateArray([1,2,3,4,5,6,7], 3));

// Without Array Functions

const rotateArrayWithoutArrFun = (nums, k) => {
    try {
        const reverse = (arr, start, end) => {
            while (start < end) {
                [arr[start], arr[end]] = [arr[end], arr[start]];
                start++;
                end--;
            }
        }
        k = (k%nums.length);
        reverse(nums, 0, nums.length-1);
        reverse(nums, 0, k-1);
        reverse(nums, k, nums.length-1);
        return nums;
    } catch (error) {
        console.error("Error in reverseArrayWithoutArrFun", error);
    }
}
console.log(rotateArrayWithoutArrFun([1,2,3,4,5,6,7], 3));
