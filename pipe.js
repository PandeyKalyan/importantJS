const add = function(a, b) {
    return a + b;
}

const dbl = function(num) {
    return num * 2;
}

const pipe = function(f, g) {
    return function(...args) {
        return g(f(...args));
    }
}

const sumAndDouble = pipe(add, dbl);

const result = sumAndDouble(2, 1);
console.log(result); 