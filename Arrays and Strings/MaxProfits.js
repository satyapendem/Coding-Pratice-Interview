/**
 * Best Time to Buy and Sell the stocks
 * Input: [7,1,5,3,6,4]
 * Output: 7
 * Explaination: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
                 Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
                 Total profit is 4 + 3 = 7.
 */

const maxProfits = (prices) => {
    try {
        let max = 0;
        let min = prices[0];
        for (let i=0; i<prices.length; i++) {
            min = Math.min(min, prices[i]);
            max += prices[i] - min;
            min = prices[i];
        }
        return max;
    } catch (error) {
        console.error("Error in maxProfits", error);
    }
}

console.log(maxProfits([7,1,5,3,6,4]));