let a = parseInt(prompt("input a"));
if (isNaN(a) || a === 0) {
    console.log('Invalid input data(a must be integer)');
}

let b = parseInt(prompt("input b"));
if (isNaN(b)) {
    console.log('Invalid input data (b must be integer)');
}
let c = parseInt(prompt("input c"));
if (isNaN(c)){
    console.log('Invalid input data (c must be integer)');
}
let x1, x2;
let D = b * b - 4 * a * c;
if (D < 0){
    console.log('There is no solution');
}
else if (D > 0){
    x1 = -b + Math.sqrt(D) / (2 * a);
    x2 = -b - Math.sqrt(D) / (2 * a);
    console.log(`result x1 =${x1} x2 = ${x2}`);
}
else{
    x1 = x2 = -b / (2 * a);
    console.log(`result x = ${x1}`);
}
