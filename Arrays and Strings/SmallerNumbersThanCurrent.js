/**
 * Given an array of numbers nums, for each number in nums, find how many numbers in the array are smaller than it.
 * Input: [8, 1, 2, 2, 3]
 * Output: [4, 0, 1, 1, 3]
 */

const smallerNumbersThanCurrent = (nums) => {
    try {
        let sortedNums = [...nums].sort((a,b) => a-b);
        let checkObj = {};
        for (let i = 0; i < sortedNums.length; i++) {
            let value = sortedNums[i];
            if (!checkObj[value]) {
                checkObj[value] = i;
            }
        }
        return nums.map(num => {
            if (num in checkObj) {
                return checkObj[num];
            }
        });
    } catch (error) {
        console.error("Error in smallerNumbersThanCurrent", error);
    }
}

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
