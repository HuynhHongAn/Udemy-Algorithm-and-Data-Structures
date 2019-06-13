// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid01(n) {
    let lineLength = n * 2 - 1;
    for (let i = 0; i < n; i++){ //Vertical
        let midIndex = n - 1;
        let line = '';
        for (let j = 0; j < lineLength; j++){
            if (j >= midIndex - i && j <= midIndex + i){
                line += '#';
            }
            else
                line += ' ';
        }
        console.log(line);
    }
}

//recursive pyramid
function pyramid(n, row = 0, line = ''){
    if (row === n)
        return;

    if (line.length === 2*n - 1){
        console.log(line);
        return pyramid(n, row + 1);
    }

    let add = (line.length <= (n - 1) + row && line.length >= (n - 1) - row)? '#':' ';
    pyramid(n, row, line + add);
}

module.exports = pyramid;
