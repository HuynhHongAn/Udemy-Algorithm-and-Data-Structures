// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function getCharObject(str) {
    let charObj = {};
    str.split('').sort().forEach((char)=> {
        if (!charObj[char])
            charObj[char] = 1;
        else
            charObj[char]++;
    });
    return charObj;
}

function anagrams01(stringA, stringB) {
    let newStringA = stringA.replace(/[^\w]/g, "").toLowerCase();
    let newStringB = stringB.replace(/[^\w]/g, "").toLowerCase();
    let objA = getCharObject(newStringA);
    let objB = getCharObject(newStringB);

    if (Object.keys(objA).length !== Object.keys(objB).length){
        return false;
    }
    debugger;
    for (let element in objA){
        if (!objB[element])
            return false;
        if (objA[element] !== objB[element])
            return false;
    }

    return true;

}

function anagrams(stringA, stringB){
    let newStringA = stringA.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
    let newStringB = stringB.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
    return newStringA === newStringB;

}

module.exports = anagrams;
