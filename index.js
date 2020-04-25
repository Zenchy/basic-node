function add(a, b){
  return a+b
}

function substract(a, b){
  return a-b
}

function multiply(a, b){
  return a*b
}

function divide(a, b){
  return b == 0 ? "Not possible to solve, denominator must be different to 0" : a/b
}

console.log(add(1,2))
console.log(divide (1,0))
console.log(divide (1,5))
console.log(multiply (2,5))
console.log(substract (3,5))
