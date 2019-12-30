function addOne(x) {
    return x + 1;
}

function pipe(num, ...functions) {
    let red = functions[0](num);
    for (let i = 0; i < functions.length - 1; i++) {
        red = functions[i](red);
    }
    return red;
}
pipe(1, addOne);