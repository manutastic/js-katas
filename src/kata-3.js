export function kata3 (n, m) {
    var output = [];
    // For each number from m to n
    for (let i = n; i <= m; i++) {
        // Find all divisors
        var sum = getSummedSquaredDivisors(i);
        // Check if sum is a square
        if (isSquare(sum)) {
            output.push([i, sum]);
        }
    }
    return output;
    
    function getSummedSquaredDivisors(num) {
        if (num === 1) return 1;
        var sum = 0;
        let lim = num;
        for (let j = 1; j < lim; j++) {
            if (num % j === 0) {
                lim = num / j;
                if (lim !== j) {
                    sum += lim**2
                }
                sum += j**2
            }
        }
        return sum;
    }
    
    function isSquare(num) {
        return Math.sqrt(num) % 1 === 0;
    }
    
}