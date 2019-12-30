function makeNumber(str) {
    let number = [];
    for (let i = 0; i < str.length; i++) {
        if (Number.isInteger(+str[i])) {
            number.push(str[i]);
        }
    }
    return number.join('');
}
function countNumbers(arr) {
    let numRez = makeNumber(arr);
    let finRez = {};
    for (let i = 0; i < numRez.length; i++) {
        let i2 = 0;
        for (let j = 0; j < numRez.length; j++) {
            if (numRez[i] === numRez[j]) {
                i2++;
            }
        }
        finRez[`'${numRez[i]}'`] = i2;

    }
    return finRez;
}
countNumbers(makeNumber('slr234513lff313j4213'));
