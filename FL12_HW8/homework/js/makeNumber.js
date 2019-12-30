function makeNumber(str) {
    let number = [];
    for (let i = 0; i < str.length; i++) {
        if (Number.isInteger(+str[i])) {
            number.push(str[i]);
        }
    }
    return number.join('');
}
makeNumber('2324123ks313dkkf324l32');