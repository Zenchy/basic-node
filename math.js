const Math = {}

Math.add = (a, b) => a+b

Math.substract = (a, b) => a-b

Math.multiply = (a, b) => a*b

Math.divide = (a, b) =>b == 0 ? "Not possible to solve, denominator must be different to 0" : a/b

module.exports = Math;