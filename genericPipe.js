const inc = (num) => num+1
const dbl = (num) => num*2
const sqr = (num) => num*num

// Pipe
const _pipe = (f, g) => (...args) => g(f(...args))
const pipe = (...fns) => fns.reduce(_pipe)

const incDblSqr = pipe(inc, dbl, sqr)
const result = incDblSqr(2)
console.log(result);
