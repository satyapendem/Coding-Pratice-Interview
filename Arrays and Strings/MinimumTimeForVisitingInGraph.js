/**
 * Minimum time require to visit given points
 * Explaination:
 * Input: [[1,1], [3,4], [-1,0]];
 * Formula: Max((x2,x1),(y2,y1))
 */

const minimunTimeForPoints = (points) => {
    try {
        let timeTaken = 0;
        for (let i = 0; i < points.length-1; i++) {
            let [x1,y1] = points[i];
            let [x2, y2] = points[i+1];
            timeTaken += Math.max(Math.abs(x2,x1), Math.abs(y2-y1));
        }
        return timeTaken;
    } catch (error) {
        console.error("Error in minimunTimeForPoints", error);
    }
}

console.log(minimunTimeForPoints([[1,1], [3,4], [-1,0]]))
