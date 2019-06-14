// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]
function squareZeros(dim) {
    let result = [];
    let dim1 = dim;
    let dim2 = dim;
    while (dim1){
        let tempArr = [];
        while (dim2){
            tempArr.push(0);
            dim2--;
        }
        result.push(tempArr);
        dim1--;
    }
    return result;
}

function matrix(n) {
    let padding = 0;
    let count = 1;
    let result = squareZeros(n);
    while (count <= n*n){
        for (let i = padding, j = padding; j < n-1-padding; j++){
            result[i][j] = count;
            count++;
        }
        for (let i = padding, j = n-1-padding; i< n-1-padding; i++){
            result[i][j] = count;
            count++;
        }
        for (let i = n-1-padding, j = n-1-padding; j > padding; j--){
            result[i][j] = count;
            count++;
        }
        for (let i = n-1-padding, j = padding; i > padding; i--){
            result[i][j] = count;
            count++;
        }
        padding ++;
    }
    debugger;
    return result;
}

matrix(4);

module.exports = matrix;
