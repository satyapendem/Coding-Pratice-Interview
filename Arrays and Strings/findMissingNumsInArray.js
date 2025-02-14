/**
 * Find missing numbers in Array
 * Explaination:
 * Input: [0,-1,3,4,5]
 * Output: [1,2]
 */

const findMissingNumbers = (nums) => {
    try {
        let min = Math.min(...nums);
        let max = Math.max(...nums);
        let missingArr = [];
        for (let i = min; i < max; i++) {
            if (nums.indexOf(i) == -1) {
                missingArr.push(i);
            }
        }
        return missingArr;
    } catch (error) {
        console.error("Error in findMissingNumbers", error);
    }
}

console.log(findMissingNumbers([0,-1,3,4,5]));