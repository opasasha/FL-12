let a = parseInt(prompt("input a"));
let b = parseInt(prompt("input b"));
let c = parseInt(prompt("input c"));
if (isNaN(c) || isNaN(a) || isNaN(b) ){
    alert('input values should be ONLY numbers');
    console.log('input values should be ONLY numbers ');
}
else if (a <= 0 || c <= 0 || b <= 0){
    alert('A triangle must have 3 sides with a positive definite length');
    console.log('A triangle must have 3 sides with a positive definite length');
}
else if (a + b > c && a + c > b && b + c > a){
    if (a === b && b === c ){
        console.log('Equilateral triangle');
    }
    else if (a === b && a !== c || b === c && a !== c || c === a && c !== b){
        console.log('Isosceles triangle');
    }
    else {
        console.log('Scalene triangle');
    }
}
else {
    alert('Triangle doesn’t exist');
    console.log('Triangle doesn’t exist');
}
