function getMin () {
    let index = 0, min=arguments[index++];
    for (let i = index; i < arguments.length; i++) {
        min = min < arguments[i] ? min : arguments[i];
    }
    return min;
}
getMin(2,5,31);
