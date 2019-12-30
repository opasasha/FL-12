function isLeapYear(arr) {
    let x = new Date(arr).getFullYear();
    if (isNaN(x)) {
        return 'Invalid Date';
    } else if (((x % 4 === 0) && (x % 100 !== 0)) || (x % 400 === 0)) {
        return `${x} is a leap year`
    } else {
        return `${x} is not a leap year`
    }
}
isLeapYear('2040-01-01 10:02:13');
