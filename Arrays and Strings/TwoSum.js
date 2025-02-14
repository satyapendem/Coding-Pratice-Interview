/**
 * 2 Sum
 * Input: [2, 7, 11, 15], target = 9
 * We need to sum of 2 indices matching the target
 */


const twoSum = (arr, target) => {
    try {
        let checkObj = {};
        for (let i = 0; i< arr.length; i++) {
            let subtract = target - arr[i];
            if (checkObj[subtract] >= 0) {
                return [checkObj[subtract], i];
            }
            checkObj[arr[i]] = i;
        }
        return [];
    } catch (error) {
        console.log("Error in twoSum", error);
    }
}

console.log(twoSum([2, 11, 15, 7], 9));
console.log(twoSum([3, 2, 4], 6));