// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib01(n) {
    let result = 0;
    if (n <= 2)
        return 1;
    let f0 = 1;
    let f1 = 1;
    for (let i = 3; i <= n; i++){
        result = f0 + f1;
        f0 = f1;
        f1 = result;
    }
    return result;
}

function fib(n){
    if (n <= 2)
        return 1;
    return fib(n-1) + fib(n-2);
}

module.exports = fib;
