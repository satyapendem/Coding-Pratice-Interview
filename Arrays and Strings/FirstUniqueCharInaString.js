/**
 * First Unique Character in a given String
 * Examples:
 * Input: s = "heehjkkll"
 * Output: 4
 * 
 * Example 2:
 * Input: s = "satya"
 * Output: 0
 * 
 * Example 3:
 * Input: s = "ssaatt"
 * Output: -1
 */

// By using Object
const firstUniqueCharObj = (str) => {
    try {
        let charCountObj = {};
        for (let i = 0; i < str.length; i++) {
            let character = str[i];
            if (charCountObj[character]) {
                charCountObj[character] = charCountObj[character]+1;
            } else {
                charCountObj[character] = 1;
            }
        }
        for (let char in charCountObj) {
            if (charCountObj[char] === 1) {
                return str.indexOf(char);
            }
        }
        return -1;
    } catch (error) {
        console.error("Error in firstUniqueCharObj", error);
    }
}

console.log(firstUniqueCharObj("ssaatt"))

// Without using object removing the space complexity
const firstUniqueCharFun = (str) => {
    try {
        let strArr = str.split("");
        for( let i = 0; i < strArr.length; i++) {
            let character = strArr[i];
            // Temperorily removing the character
            strArr.splice(i, 1);
            if (!strArr.includes(character)) {
                return i;
            } else {
                //adding the Character back
                strArr.splice(i, 0, character);
            }
        }
        return -1;
    } catch (error) {
        console.error("Error in firstUniqueCharFun", error);
    }
}
console.log(firstUniqueCharFun("ssatya"))
