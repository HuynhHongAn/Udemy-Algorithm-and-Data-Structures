// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function line(number, n) {
    let line = '';
    for (let i = 1; i <= n; i++){
        if (i <= number){
            line += '#'
        }
        else {
            line += ' '
        }
    }
    return line;
}

function steps01(n) {
    for (let i = 1; i <= n; i++){
        console.log(line(i, n));
    }
}

//recursive steps function
function steps(n, row = 0, stair = ''){
    if (n === row){
        return;
    }
    if (stair.length === n){
        console.log(stair);
        return steps(n, row + 1);
    }
    let add = stair.length <= row ? '#' : ' ';
    steps(n, row, stair + add);
}
module.exports = steps;
