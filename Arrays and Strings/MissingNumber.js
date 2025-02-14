/**
 * Missing number in Array
 * Example:
 * Input: [0,2,3]
 * Output: 1
 */

const missingNumber = (nums) => {
    try {
        let numsSet = new Set(nums);
        let reqLength = nums.length+1;
        for ( let i = 0; i< reqLength; i++) {
            if (!numsSet.has(i))
                return i;
        }
        return -1;
    } catch (error) {
        console.error("Error in missingNumber", error);
    }
}

console.log(missingNumber([1,0,3]));
console.log(missingNumber([1,0,3,2]));