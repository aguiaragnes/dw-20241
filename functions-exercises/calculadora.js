function calculadora(a, b, callback) {
    return callback(a, b);
}

console.log(calculadora(2, 2, (a, b) => a + b))
console.log(calculadora(2, 2, (a, b) => a - b))
console.log(calculadora(2, 2, (a, b) => a * b))
console.log(calculadora(2, 2, (a, b) => a / b))
